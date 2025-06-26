import { useState } from "react"


const Search = () => {
  
  const [searchInput, setSearchInput] = useState("")

  const handleChange = ({target}) => {
    setSearchInput(target.value)
  }

  return (
    <form>
      <label htmlFor="search">
        <input name='search' id="search" placeholder="Search" onChange={handleChange} value={searchInput} />
      </label>
    </form>
  )
}

export default Search