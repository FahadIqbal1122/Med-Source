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
import Feed from './pages/Feed'
import { CheckSession } from './services/Auth'
import SignIn from './pages/SignIn'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div>
      <body>
        <header>
          <Nav user={user} handleLogOut={handleLogOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Categories" element={<Categories />} exact />
            <Route path="/Brands" element={<Brands />} exact />
            <Route path="/RequestMed" element={<RequestMed />} exact />
            <Route path="/MyMedicines" element={<MyMedicines />} exact />
            <Route path="/Contact" element={<Contact />} exact />
            <Route path="/Products" element={<Products />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="/feed" element={<Feed user={user} />} exact />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
          </Routes>
          <CartButton />
        </main>
      </body>
    </div>
  )
}

export default App
