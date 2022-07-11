import { TaskRequestEntity } from '../../tasks'

export interface CreateTaskUseCase {
  execute(task: TaskRequestEntity): void
}
