import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Business from './pages/Business';
import Coupon from './pages/Coupon';
import Detail from './pages/Detail';
import Review from './pages/Review';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  const [user, setUser] = useState(null)
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);
    }
  }, []);
  const handleLogOut = () => {
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
    <div className="App">
      <div className="space"></div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories/:category" element={<Business />} />
          <Route path="/categories/:category/:id/coupons" element={<Coupon />} />
          <Route path="/categories/:category/:id/coupons/:id/details" element={<Detail />} />
          <Route path="/categories/:category/:id/coupons/:id/details/:id/review" element={<Review />} />
          <Route path="/signin" element={<SignIn setAuth={setAuth} />} />
          <Route path="/signup" element={<SignUp setAuth={setAuth}  /> } />
          <Route path="/dashboard" element={auth ? <h2>Dashboard</h2> : <Navigate to="/signin" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
