import server from './server'
import TasksRouter from './presentation/routers/task-router'
import { GetAllTasks } from './domain/use-cases/task/get-all-task'
import { TaskRepositoryImpl } from './domain/repositories/task-repository'
import { DeleteTask } from './domain/use-cases/task/delete-task'
import { CreateTask } from './domain/use-cases/task/create-task'
import { UpdateTask } from './domain/use-cases/task/update-task'
import { MongoClient } from 'mongodb'
import { NoSQLDatabaseWrapper } from './data/interfaces/data-source/nosql-database-wrapper'
import { MongoDBTaskDataSource } from './data/data-sources/mongodb/mongodb-contact-data-source'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3333

async function getMongoDS (): Promise<MongoDBTaskDataSource> {
  const client: MongoClient = new MongoClient(process.env.URI)
  await client.connect()
  const db = client.db(process.env.DB)

  const taskDatabase: NoSQLDatabaseWrapper = {
    find: (query) => db.collection(process.env.COLLECTION).find(query).toArray(),
    insertOne: (doc) => db.collection(process.env.COLLECTION).insertOne(doc),
    deleteOne: (id: String) => db.collection(process.env.COLLECTION).deleteOne({ _id: id }),
    updateOne: (id: String, data: object) => db.collection(process.env.COLLECTION).replaceOne({ _id: id }, data)
  }

  return new MongoDBTaskDataSource(taskDatabase)
}
(async () => {
  const dataSource = await getMongoDS()

  const taskMiddleware = TasksRouter(
    new GetAllTasks(new TaskRepositoryImpl(dataSource)),
    new CreateTask(new TaskRepositoryImpl(dataSource)),
    new DeleteTask(new TaskRepositoryImpl(dataSource)),
    new UpdateTask(new TaskRepositoryImpl(dataSource))
  )
  server.use('/tasks', taskMiddleware)
  server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))
})()
