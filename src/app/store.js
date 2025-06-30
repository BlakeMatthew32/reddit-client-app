import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/search/searchSlice.js'
import redditFeedReducer from '../features/redditFeed/redditFeedSlice.js'

export default configureStore({
  reducer: {
    search: searchReducer,
    redditFeed: redditFeedReducer,
  }
})