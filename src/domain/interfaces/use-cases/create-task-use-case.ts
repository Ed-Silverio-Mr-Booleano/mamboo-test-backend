import { TaskRequestEntity } from '../../entities/task'

export interface CreateTaskUseCase {
  execute(task: TaskRequestEntity): void
}
