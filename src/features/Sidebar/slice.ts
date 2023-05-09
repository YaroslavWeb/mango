import { createSlice } from '@reduxjs/toolkit'

interface I_InitialState {
  isOpen: boolean
}

const initialState: I_InitialState = {
  isOpen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true
    },
    closeSidebar: (state) => {
      state.isOpen = false
    },
  },
})

export const sidebarActions = sidebarSlice.actions
