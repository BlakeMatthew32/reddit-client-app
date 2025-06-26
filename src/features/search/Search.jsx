import { useDispatch, useSelector } from "react-redux"
import { clearSearchTerm, selectSearchTerm, setSearchTerm } from "./searchSlice"

const Search = () => {
  
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)
  
  const onSearchChangeHandler = ({target}) => {
    dispatch(setSearchTerm(target.value))
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(searchTerm) // Do something with the search term on submit here
    dispatch(clearSearchTerm())
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="search">
        <input name='search' id="search" placeholder="Search" onChange={onSearchChangeHandler} value={searchTerm} />
      </label>
    </form>
  )
}

export default Search