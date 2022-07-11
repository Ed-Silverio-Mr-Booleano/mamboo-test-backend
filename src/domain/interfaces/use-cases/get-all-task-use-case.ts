import { TaskResponseEntity } from '../../entities/task'

export interface GetAllTaskUseCase {
  execute(): Promise<TaskResponseEntity[]>
}
