import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { sidebarSlice } from 'features/Sidebar/slice'

const rootReducer = combineReducers({
  // Feature slices
  [sidebarSlice.name]: sidebarSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
