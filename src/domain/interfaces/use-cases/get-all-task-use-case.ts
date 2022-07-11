import { TaskResponseEntity } from '../../entities/task'

export interface GetAllTasksUseCase {
  execute(): Promise<TaskResponseEntity[]>
}
