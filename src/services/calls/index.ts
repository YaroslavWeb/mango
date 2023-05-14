import { createApi } from '@reduxjs/toolkit/query/react'

import { I_GetCalls } from './models/responses'

import { baseQuery } from '../utils'

export const callsAPI = createApi({
  reducerPath: 'callsAPI',
  baseQuery,
  tagTypes: ['calls'],
  endpoints: (build) => ({
    getCalls: build.mutation<I_GetCalls, null>({
      query: () => ({
        url: '/mango/getList',
        method: 'POST',
      }),
    }),
  }),
})
