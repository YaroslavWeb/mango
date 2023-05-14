import { useEffect } from 'react'

import { columns } from './data'

import { Table } from 'components/Table'
import { I_Call } from 'models/calls'
import { callsAPI } from 'services/calls'

export const Calls = () => {
  const [fetchCalls, { data }] = callsAPI.useGetCallsMutation()

  useEffect(() => {
    fetchCalls(null)
  }, [fetchCalls])

  return (
    <div>
      Таблица звонков
      {data && <Table<I_Call> data={data.results} columns={columns} />}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
