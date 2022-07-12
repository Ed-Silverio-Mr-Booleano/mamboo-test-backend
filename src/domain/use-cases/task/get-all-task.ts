// domain/use-cases/contact/-get-all-contacts.ts
import { TaskResponseEntity } from '../../entities/task'
import { TaskRepository } from '../../interfaces/repositories/task-repository'
import { GetAllTasksUseCase } from '../../interfaces/use-cases/get-all-task-use-case'

export class GetAllTasks implements GetAllTasksUseCase {
  taskRepository: TaskRepository
  constructor (taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (): Promise<TaskResponseEntity[]> {
    const result = await this.taskRepository.getTasks()
    return result
  }
}
