import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  const isLoggedIn = !!user

  return (
    <header>
  <div>
    <nav>
      <div className="nav-cont">
        <div className="nav">
          <div className="headerLogin">
            <Link to="/">Home</Link>
          </div>
          <div className="headerLogin dropdown">
            <Link to="/Products" className="dropdown-link">
              Products
            </Link>
            <div className="dropdown-menu" >
              <Link to="/Categories">Categories</Link>
            </div>
          </div>
          <div className="headerLogin">
            <Link to="/Brands">Brands</Link>
          </div>
          {!isLoggedIn && (
            <>
              <div className="headerLogin">
                <Link to="/register">Register</Link>
              </div>
              <div className="headerLogin">
                <Link to="/signin">Login</Link>
              </div>
            </>
          )}
          {isLoggedIn && (
            <>
              <div className="headerLogin">
                <button onClick={handleLogOut} id='logout'>Logout</button>
              </div>
              <div className="headerLogin">
                <Link to="/Profile">
                  <button id='logout'>Profile</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  </div>
</header>

  )
}

export default Nav
