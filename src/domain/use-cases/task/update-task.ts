import { TaskRepository } from '../../interfaces/repositories/task-repository'
import { UpdateTaskUseCase } from '../../interfaces/use-cases/update-task-use-case'
import { TaskRequestEntity } from '../../entities/task'

export class UpdateTask implements UpdateTaskUseCase {
  taskRepository: TaskRepository
  constructor (taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute (id: String, data: TaskRequestEntity): Promise<void> {
    await this.taskRepository.updateTask(id, data)
  }
}
