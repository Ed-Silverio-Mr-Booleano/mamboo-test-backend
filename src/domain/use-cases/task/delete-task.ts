import { TaskRepository } from '../../interfaces/repositories/task-repository'
import { DeleteTaskUseCase } from '../../interfaces/use-cases/delete-task-use-case'

export class DeleteTask implements DeleteTaskUseCase {
  taskRepository: TaskRepository
  constructor (taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (id: String): Promise<void> {
    await this.taskRepository.deleteTask(id)
  }
}
