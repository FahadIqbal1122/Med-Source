import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Categories from './components/Categories'

import Brands from './components/Brands'
import RequestMed from './pages/RequestMed'
import MyMedicines from './pages/MyMedicines'
import Contact from './pages/Contact'
import CartButton from './components/CartButton'
import Products from './pages/products'
import Register from './pages/Register'
import RequestedProducts from './components/RequestedProducts'
import { CheckSession } from './services/Auth'
import SignIn from './pages/SignIn'
import React, { useState, useEffect } from 'react'
import Details from './pages/Details'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const fetchUser = async (token) => {
      try {
        const response = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        if (response) {
          setUser(response.data.logged_user)
        }
      } catch (error) {
        console.error(`Error fetching user ${error}`)
      }
    }
    console.log(`useEffect`)
    const token = localStorage.getItem('token')
    if (token) {
      console.log(`token exists: ${token}`)
      fetchUser(token)
      console.log(`user: ${user}`)
    }
  }, [user])

  return (
    <div>
      <body>
        <header>
          <Nav user={user} handleLogOut={handleLogOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home user={user} />} exact />
            <Route path="/Categories" element={<Categories />} exact />

            <Route path="/Brands" element={<Brands user={user} />} exact />
            <Route
              path="/RequestMed"
              element={<RequestMed user={user} />}
              exact
            />
            <Route
              path="/RequestedProducts"
              element={<RequestedProducts user={user} />}
              exact
            />
            <Route
              path="/MyMedicines"
              element={<MyMedicines user={user} />}
              exact
            />
            <Route path="/Contact" element={<Contact user={user} />} exact />
            <Route path="/Products" element={<Products user={user} />} exact />
            <Route path="/register" element={<Register />} exact />

            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route
              path="/Products/details/:productId"
              element={<Details />}
              exact
            />
          </Routes>
          <CartButton />
        </main>
      </body>
    </div>
  )
}

export default App
