import { TaskRequestEntity } from '../../entities/task'

export interface UpdateTaskUseCase {
  execute(id: String, data: TaskRequestEntity): void
}
