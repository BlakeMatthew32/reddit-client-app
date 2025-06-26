import { useState } from "react"
import Search from "../features/search/Search"

const Header = () => {


  return (
    <header>
      <h2>Reddit Client App</h2>
      <Search />
    </header>
  )
}

export default Header