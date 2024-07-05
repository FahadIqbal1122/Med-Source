import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Categories from './components/Categories'
import Offers from './components/Offers'
import Brands from './components/Brands'
const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Categories" element={<Categories />} exact />
          <Route path="/Offers" element={<Offers />} exact />
          <Route path="/Brands" element={<Brands />} exact />
        </Routes>
      </main>
    </div>
  )
}

export default App
