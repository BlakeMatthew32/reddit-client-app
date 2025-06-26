import { createSlice } from "@reduxjs/toolkit";


export const redditFeedSlice = createSlice({
  name: 'redditFeed',
  initialState: {

  },
  reducers: {

  }
})

export const { } = redditFeedSlice.actions

export const selectRedditFeed = state => state.redditFeed

export default redditFeedSlice.reducer