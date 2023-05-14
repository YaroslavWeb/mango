import { ReactNode } from 'react'

export type T_Column<T> = {
  title: string
  key: keyof T | null
  render?: (value: any, row: T) => JSX.Element
}[]

interface I_TableProps<T> {
  columns: T_Column<T>
  data: T[]
}

export const Table = <T extends { id: number }>({ columns, data }: I_TableProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.title}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => {
                if (column.render && column.key) {
                  return <td key={row.id + column.title}>{column.render(row[column.key], row)}</td>
                } else if (column.key) {
                  return <td key={row.id + column.title}>{row[column.key] as ReactNode}</td>
                } else {
                  return <td key={row.id + column.title}>...</td>
                }
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
