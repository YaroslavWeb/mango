import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SERVER_API,
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer testtoken`)
    return headers
  },
})
