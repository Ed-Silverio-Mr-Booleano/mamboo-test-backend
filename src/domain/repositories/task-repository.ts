// domain/repositories/task-repository.ts
import { TaskDataSource } from '../../data/interfaces/data-source/task-data-source'
import { TaskRequestEntity, TaskResponseEntity } from '../entities/task'
import { TaskRepository } from '../interfaces/repositories/task-repository'

export class TaskRepositoryImpl implements TaskRepository {
  taskDataSource: TaskDataSource
  constructor (taskDataSource: TaskDataSource) {
    this.taskDataSource = taskDataSource
  }

  async deleteTask (id: String): Promise<void> {
    await this.taskDataSource.deleteOne(id)
  }

  async updateTask (id: String, data: TaskRequestEntity): Promise<void> {
    await this.taskDataSource.updateOne(id, data)
  }

  async getTask (id: String): Promise<TaskResponseEntity | null> {
    const result = await this.taskDataSource.getOne(id)
    return result
  }

  async createTask (task: TaskRequestEntity): Promise<void> {
    await this.taskDataSource.create(task)
  }

  async getTasks (): Promise<TaskResponseEntity[]> {
    const result = await this.taskDataSource.getAll()
    return result
  }
}
