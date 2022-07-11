import { TaskRequestEntity, TaskResponseEntity } from '../../entities/task'

export interface TaskRepository {
  createTask(tasks: TaskRequestEntity): void
  deleteTask(id: String): void
  updateTask(id: String, data: TaskRequestEntity): void
  getTasks(): Promise<TaskResponseEntity[]>
  getTasks(id: String): Promise<TaskResponseEntity | null>
}
