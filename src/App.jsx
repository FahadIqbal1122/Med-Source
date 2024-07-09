import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Categories from "./components/Categories"
import Brands from "./components/Brands"
import RequestMed from "./pages/RequestMed"
import MyMedicines from "./pages/MyMedicines"
import Contact from "./pages/Contact"
import CartButton from "./components/CartButton"
import Products from "./pages/products"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Details from "./pages/Details"
import RequestedProducts from "./components/RequestedProducts"
import React, { useState, useEffect } from "react"
import axios from "axios"
import ProductBrand from "./pages/ProductBrand"

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (user) return
    if (token) {
      console.log(`token exists: ${token}`)
      const fetchUser = async (token) => {
        try {
          const response = await axios.get("http://localhost:5000/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          console.log(response)
          if (response) {
            setUser(response.data)
          }
        } catch (error) {
          console.error(`Error fetching user ${error}`)
        }
      }
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
            {/* <Route path="/Offers" element={<Offers user={user} />} exact /> */}
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
              element={<Details setUser={setUser} />}
              exact
            />
            <Route
              path="/ProductBrand/:brand"
              element={<ProductBrand setUser={setUser} />}
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
