
export interface TaskRequestEntity {
  name: string
  startDate: Date
  finshDate: Date
  status: string
}

export interface TaskResponseEntity {
  id: string
  name: string
  startDate: Date
  finshDate: Date
  status: string
}
