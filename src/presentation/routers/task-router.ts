import express, { Request, Response } from 'express'
import { GetAllTasksUseCase } from '../../domain/interfaces/use-cases/get-all-task-use-case'
import { CreateTaskUseCase } from '../../domain/interfaces/use-cases/create-task-use-case'

export default function TasksRouter (
  getAllTasksUseCase: GetAllTasksUseCase,
  createTaskUseCase: CreateTaskUseCase
): express.Router {
  const router = express.Router()

  router.get('/', async (request: Request, response: Response) => {
    try {
      const tasks = await getAllTasksUseCase.execute()
      response.send(tasks)
    } catch (error) {
      console.log(error.message)
      response.status(500).send()
    }
  })

  router.post('/', async (request: Request, response: Response) => {
    try {
      await createTaskUseCase.execute(request.body)
      response.statusCode = 201
      response.json({ message: 'Created' })
    } catch (error) {
      console.log(error.message)
      response.status(500).send({ message: 'Error saving data' })
    }
  })

  return router
}
