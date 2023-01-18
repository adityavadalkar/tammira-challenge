import { configureStore } from '@reduxjs/toolkit'
import poster from './poster'

export const store = configureStore({
  reducer: {
    addPost: poster
  },
})