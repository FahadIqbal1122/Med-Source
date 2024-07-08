import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const handleDropdownToggle = () => {
  //   setIsDropdownVisible(!isDropdownVisible);
  // }
  return (
    <header>
      <div>
        <nav>
          <div className="nav-cont">
            <div className="nav">
              <NavLink to="/">Home</NavLink>
              <div className="dropdown">
              <NavLink to="/Products" className="dropdown-link">
              Products
                </NavLink>
                  <div className="dropdown-menu">
                    <NavLink to="/Categories">Categories</NavLink>
                  </div>
              </div>
              <NavLink to="/Offers">Offers</NavLink>
              <NavLink to="/Brands">Brands</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/signin">Login</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Nav
