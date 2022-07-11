import { TaskResponseEntity } from '../../entities/task'

export interface GetOneTaskUseCase {
  execute(id: String): Promise<TaskResponseEntity | null>
}
