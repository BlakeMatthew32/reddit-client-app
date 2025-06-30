import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRedditFeed = createAsyncThunk(
  'redditFeed/fetchRedditFeed',
  async (topic, thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/r/${topic}.json`)
    const json = await response.json()
    return json.data.children
  }
)


export const redditFeedSlice = createSlice({
  name: 'redditFeed',
  initialState: {
    activeTopic: '',
    posts: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    setActiveTopic(state, action) {
      state.activeTopic = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRedditFeed.pending, (state, actions) => {
      state.isLoading = true
      state.hasError = false
    })
    .addCase(fetchRedditFeed.fulfilled, (state, actions) => {
      state.isLoading = false
      state.hasError = false
      state.posts = actions.payload
    })
    .addCase(fetchRedditFeed.rejected, (state, actions) => {
      state.isLoading = false
      state.hasError = true
    })
  }
})

export const { setActiveTopic } = redditFeedSlice.actions

export const selectRedditFeedPosts = state => state.redditFeed.posts
export const selectTopic = state => state.redditFeed.activeTopic

export default redditFeedSlice.reducer