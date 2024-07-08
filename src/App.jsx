import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Categories from "./components/Categories"
import Offers from "./components/Offers"
import Brands from "./components/Brands"
import RequestMed from "./pages/RequestMed"
import MyMedicines from "./pages/MyMedicines"
import Contact from "./pages/Contact"
import CartButton from "./components/CartButton"
import Category1 from "./pages/Category1"
import Category2 from "./pages/Category2"
import Category3 from "./pages/Category3"
import Products from "./pages/products"

const App = () => {
  return (
    <div>
      <body>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Categories" element={<Categories />} exact />
            <Route path="/Categories/Category1" element={<Category1 />} exact />
            <Route path="/Offers" element={<Offers />} exact />
            <Route path="/Brands" element={<Brands />} exact />
            <Route path="/RequestMed" element={<RequestMed />} exact />
            <Route path="/MyMedicines" element={<MyMedicines />} exact />
            <Route path="/Contact" element={<Contact />} exact />
            <Route path="/Products" element={<Products />} exact />
          </Routes>
          <CartButton />
        </main>
      </body>
    </div>
  )
}

export default App
