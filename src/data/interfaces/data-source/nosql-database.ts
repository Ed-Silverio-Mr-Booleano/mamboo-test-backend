// data/data-sources/contact-data-source.ts
import { TaskRequestEntity, TaskResponseEntity } from '../../../domain/entities/task'
export interface TaskDataSource {
  create(contact: TaskRequestEntity): void
  getAll(): Promise<TaskResponseEntity[]>
  deleteOne(id: String): void
  updateOne(id: String, data: TaskRequestEntity): void
  getOne(id: String): Promise<TaskResponseEntity | null>
}
