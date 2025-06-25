import { useState } from "react"

const Header = () => {
  const [searchInput, setSearchInput] = useState("")

  const handleChange = ({target}) => {
    setSearchInput(target.value)
  }

  return (
    <header>
      <h2>Reddit Client App</h2>
      <label htmlFor="search">
        <input name='search' id="search" placeholder="Search" onChange={handleChange} value={searchInput} />
      </label>
    </header>
  )
}

export default Header