import { TaskRequestEntity, TaskResponseEntity } from '../../../domain/entities/task'
import { TaskDataSource } from '../../interfaces/data-source/task-data-source'
import { NoSQLDatabaseWrapper } from '../../interfaces/data-source/nosql-database-wrapper'

export class MongoDBTaskDataSource implements TaskDataSource {
  private readonly db: NoSQLDatabaseWrapper
  constructor (db: NoSQLDatabaseWrapper) {
    this.db = db
  }

  async deleteOne (id: String): Promise<void> {
    await this.db.deleteOne(id)
  }

  async updateOne (id: String, data: TaskRequestEntity): Promise<void> {
    await this.db.updateOne(id, data)
  }

  async getOne (id: String): Promise<TaskResponseEntity> {
    const result = await this.db.find({ _id: id })
    return result.map(item => ({
      id: item._id.toString(),
      name: item.name,
      startDate: item.startDate,
      finishDate: item.finishDate,
      status: item.status
    }))[0]
  }

  async create (task: TaskRequestEntity): Promise<void> {
    await this.db.insertOne(task)
  }

  async getAll (): Promise<TaskResponseEntity[]> {
    const result = await this.db.find({})
    return result.map(item => ({
      id: item._id.toString(),
      name: item.name,
      startDate: item.startDate,
      finishDate: item.finishDate,
      status: item.status
    }))
  }
}
