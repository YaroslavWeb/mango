import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { callsAPI } from 'services/calls'

const rootReducer = combineReducers({
  // Services
  [callsAPI.reducerPath]: callsAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(callsAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
