// domain/use-cases/contact/-get-all-contacts.ts
import { TaskResponseEntity } from '../../entities/task'
import { TaskRepository } from '../../interfaces/repositories/task-repository'
import { GetOneTaskUseCase } from '../../interfaces/use-cases/get-one-task-use.case'

export class GetOneTask implements GetOneTaskUseCase {
  taskRepository: TaskRepository
  constructor (taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (id: String): Promise<TaskResponseEntity | null> {
    const result = await this.taskRepository.getTask(id)
    return result
  }
}
