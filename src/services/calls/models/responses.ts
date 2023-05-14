import { I_Call } from 'models/calls'

export type I_GetCalls = {
  totalRows: string
  results: I_Call[]
}
