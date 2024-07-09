import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  const isLoggedIn = !!user

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
              <NavLink to="/Brands">Brands</NavLink>
              {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
              {!isLoggedIn && <NavLink to="/signin">Login</NavLink>}

              {isLoggedIn && (
                <NavLink to="/">
                  <button onClick={handleLogOut}>Logout</button>
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Nav
