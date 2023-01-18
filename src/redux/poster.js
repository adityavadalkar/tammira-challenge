import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [{}],
}

export const postCreator = createSlice({
  name: 'postCreator',
  initialState,
  reducers: {
    add: (state, post) => {
      state.posts.push(post)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = postCreator.actions

export default postCreator.reducer