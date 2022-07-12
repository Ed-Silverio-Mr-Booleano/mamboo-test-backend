import request from 'supertest'
import { CreateTaskUseCase } from '../../domain/interfaces/use-cases/create-task-use-case'
import { GetAllTasksUseCase } from '../../domain/interfaces/use-cases/get-all-task-use-case'
import { DeleteTaskUseCase } from '../../domain/interfaces/use-cases/delete-task-use-case'
import { TaskRequestEntity, TaskResponseEntity } from '../../domain/entities/task'
import TasksRouter from './task-router'
import server from '../../server'

class MockGetAllTasksUseCase implements GetAllTasksUseCase {
  async execute (): Promise<TaskResponseEntity[]> {
    throw new Error('Method not imlemented.')
  }
}

class MockCreateTaskUseCase implements CreateTaskUseCase {
  execute (task: TaskRequestEntity): void {
    throw new Error('Method not implemented.')
  }
}

class MockDeleteTaskUseCase implements DeleteTaskUseCase {
  execute (id: String): void {
    throw new Error('Method not implemented')
  }
}

describe('Entity Router', () => {
  let mockGetAllTasksUseCase: GetAllTasksUseCase
  let mockCreateTaskUseCase: CreateTaskUseCase
  let mockDeleteTaskUseCase: MockDeleteTaskUseCase

  beforeAll(() => {
    mockGetAllTasksUseCase = new MockGetAllTasksUseCase()
    mockCreateTaskUseCase = new MockCreateTaskUseCase()
    mockDeleteTaskUseCase = new MockDeleteTaskUseCase()
    server.use('/tasks', TasksRouter(mockGetAllTasksUseCase, mockGetAllTasksUseCase, mockDeleteTaskUseCase))
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /tasks', () => {
    test('should return 200 with data', async () => {
      const ExpectedData = [{ id: '1', name: 'Mamboo', startDate: '11-12-2022', finishDate: '11-12-2023', status: 'enqueue' }]
      jest.spyOn(mockGetAllTasksUseCase, 'execute').mockImplementation(async () => await Promise.resolve(ExpectedData))

      const response = await request(server).get('/tasks')

      expect(response.status).toBe(200)
      expect(mockGetAllTasksUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual(ExpectedData)
    })
  })

  describe('POST /tasks', () => {
    test('should return 201 if data was created', async () => {
      const InputData = { id: '1', name: 'Mambo API 1.0.1', startDate: '02-11-2021', finishDate: '03-04-2022', status: 'done' }
      jest.spyOn(mockCreateTaskUseCase, 'execute').mockImplementation(() => Promise.resolve(true))
      const response = await request(server).post('/tasks').send(InputData)
      expect(response.status).toBe(201)
    })
  })

  describe('DELETE /tasks', () => {
    test('should return 200 if data was deleted', async () => {
      const InputData = { id: '1' }
      jest.spyOn(mockDeleteTaskUseCase, 'execute').mockImplementation(() => Promise.resolve(true))
      const response = await request(server).delete('/tasks/:id').send(InputData)
      expect(response.status).toBe(200)
    })
  })
})
