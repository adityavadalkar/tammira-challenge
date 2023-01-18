import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [{}],
}

export const postCreator = createSlice({
  name: 'postCreator',
  initialState,
  reducers: {
    add: (state, action) => {
      state.posts.push(action.payload)
    },
    set: (state, action) => {
        state.posts = action.payload
      },
    get: (state) => {
        return state.posts
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, set, get } = postCreator.actions

export default postCreator.reducer