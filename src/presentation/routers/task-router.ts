import express, { Request, Response } from 'express'
import { GetAllTasksUseCase } from '../../domain/interfaces/use-cases/get-all-task-use-case'

export default function TasksRouter (
  getAllTasksUseCase: GetAllTasksUseCase
): express.Router {
  const router = express.Router()
  router.get('/', async (request: Request, response: Response) => {
    const tasks = await getAllTasksUseCase.execute()
    response.send(tasks)
  })

  return router
}
