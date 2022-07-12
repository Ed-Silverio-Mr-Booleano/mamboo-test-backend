import { TaskRequestEntity } from '../../entities/task'
import { TaskRepository } from '../../interfaces/repositories/task-repository'
import { CreateTaskUseCase } from '../../interfaces/use-cases/create-task-use-case'

export class CreateTask implements CreateTaskUseCase {
  TaskRepository: TaskRepository
  constructor (TaskRepository: TaskRepository) {
    this.TaskRepository = TaskRepository
  }

  async execute (task: TaskRequestEntity): Promise<void> {
    await this.TaskRepository.createTask(task)
  }
}
