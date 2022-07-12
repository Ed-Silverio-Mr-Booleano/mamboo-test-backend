// data/data-sources/task-data-source.ts
import { TaskRequestEntity, TaskResponseEntity } from '../../../domain/entities/task'

export interface TaskDataSource {
  create(task: TaskRequestEntity): void
  getAll(): Promise<TaskResponseEntity[]>
  deleteOne(id: String): void
  updateOne(id: String, data: TaskRequestEntity): void
  getOne(id: String): Promise<TaskResponseEntity | null>
}
