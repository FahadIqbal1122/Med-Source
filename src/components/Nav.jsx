import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <div>
        <nav>
          <div className="nav-cont">
            <div className="nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/Categories">Categories</NavLink>
              <NavLink to="/Offers">Offers</NavLink>
              <NavLink to="/Brands">Brands</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Nav
