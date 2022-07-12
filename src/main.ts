import server from './server'
import TasksRouter from './presentation/routers/task-router'
import { GetAllTasks } from './domain/use-cases/task/get-all-task'
import { TaskRepositoryImpl } from './domain/repositories/task-repository'
import { CreateTask } from './domain/use-cases/task/create-task'
import { MongoClient } from 'mongodb'
import { NoSQLDatabaseWrapper } from './data/interfaces/data-source/nosql-database-wrapper'
import { MongoDBTaskDataSource } from './data/data-sources/mongodb/mongodb-contact-data-source'

async function getMongoDS (): Promise<MongoDBTaskDataSource> {
  const client: MongoClient = new MongoClient('mongodb://localhost:2717/tasks')
  await client.connect()
  const db = client.db('TASKS_DB')

  const taskDatabase: NoSQLDatabaseWrapper = {
    find: (query) => db.collection('tasks').find(query).toArray(),
    insertOne: (doc) => db.collection('tasks').insertOne(doc),
    deleteOne: (id: String) => db.collection('tasks').deleteOne({ _id: id }),
    updateOne: (id: String, data: object) => db.collection('taks').updateOne({ _id: id }, data)
  }

  return new MongoDBTaskDataSource(taskDatabase)
}
(async () => {
  const dataSource = await getMongoDS()

  const taskMiddleware = TasksRouter(
    new GetAllTasks(new TaskRepositoryImpl(dataSource)),
    new CreateTask(new TaskRepositoryImpl(dataSource))
  )
  server.use('/tasks', taskMiddleware)
  server.listen(3333, () => console.log('Running on http://localhost:3333'))
})()
