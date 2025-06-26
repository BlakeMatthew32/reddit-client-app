import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm(state, action) {
      return action.payload
    },
    clearSearchTerm(state) {
      return ""
    }
  }
})

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions

export const selectSearchTerm = (state) => {
  return state.search
}

export default searchSlice.reducer