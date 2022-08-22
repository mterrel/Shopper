import React from 'react'
import NavBar from './NavBar'

const Header = (props) => {
  return (
    <div>
          <NavBar />
          {props.children}
    </div>
  )
}

export default Header
