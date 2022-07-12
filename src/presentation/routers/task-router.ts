import express, { Request, Response } from 'express'
import { GetAllTasksUseCase } from '../../domain/interfaces/use-cases/get-all-task-use-case'
import { CreateTaskUseCase } from '../../domain/interfaces/use-cases/create-task-use-case'
import { DeleteTaskUseCase } from '../../domain/interfaces/use-cases/delete-task-use-case'
import { UpdateTaskUseCase } from '../../domain/interfaces/use-cases/update-task-use-case'

export default function TasksRouter (
  getAllTasksUseCase: GetAllTasksUseCase,
  createTaskUseCase: CreateTaskUseCase,
  deleteTaskUseCase: DeleteTaskUseCase,
  updateTaskUseCase: UpdateTaskUseCase
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

  router.delete('/:id', async (request: Request, response: Response) => {
    try {
      await deleteTaskUseCase.execute(request.params.id)
      response.statusCode = 200
      console.log('param id: ', request.params.id)
      response.json({ message: 'Deleted' })
    } catch (error) {
      console.log(error.message)
      response.status(500).send({ message: 'Error deleting data' })
    }
  })

  router.put('/:id', async (request: Request, response: Response) => {
    try {
      await updateTaskUseCase.execute(request.params.id, request.body)
      response.statusCode = 200
      console.log(`param id: ${request.params.id}`)
      response.json({ message: 'Updated' })
    } catch (error) {
      console.log(error.message)
      response.status(500).send({ message: 'Error updating data' })
    }
  })

  return router
}
