import request from 'supertest'
import { GetAllTasksUseCase } from '../../domain/interfaces/use-cases/get-all-task-use-case'
import { TaskResponseEntity } from '../../domain/entities/task'
import TasksRouter from './task-router'
import server from '../../server'

class MockGetAllTasksUseCase implements GetAllTasksUseCase {
  async execute (): Promise<TaskResponseEntity[]> {
    throw new Error('Method not imlemented.')
  }
}

describe('Entity Router', () => {
  let mockGetAllTasksUseCase: GetAllTasksUseCase

  beforeAll(() => {
    mockGetAllTasksUseCase = new MockGetAllTasksUseCase()
    server.use('/tasks', TasksRouter(mockGetAllTasksUseCase))
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
})
