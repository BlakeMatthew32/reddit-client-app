import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/search/searchSlice.js'

export default configureStore({
  reducer: {
    search: searchReducer,
  }
})