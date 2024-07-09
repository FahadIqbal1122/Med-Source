import Brands_card from './BrandCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Brands = () => {
    const navigate = useNavigate();
  
    const handleNavigate = (brand) => {
      navigate(`/ProductBrand/${brand}`);
    }

  return (
    <>
      <div className="brands">
        <h2>Brands</h2>
        <a href="#" className="all-products">All Products</a>
        <div className="brands-grid" >
        <div className="inside-brands" onClick={() => handleNavigate('L\'Oreal')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/loreal_1-285x123.5.png" alt="L'Oreal" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('Eucerin')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/Eucerin-285x123.5.png" alt="Eucerin" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/lytess_1-285x123.5.png" alt="Lytess" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/tommee_1-285x123.5.png" alt="Tommee" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/dr-organic_1-285x123.5.png" alt="Dr. Organic" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/fair-lovely-285x123.5.png" alt="Fair & Lovely" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/nan-285x123.5.png" alt="Nan" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/cerelac-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/clarins-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/kiss-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=tea-tree-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=//brands/priorin-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/nbty_1-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/rx-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/bourjois-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands">
            <img src="https://api.nasserpharmacy.com/images?file=/brands/NIVEA_logo-285x123.5.png" alt="Cerelac" />
          </div>

          
          
          
        </div>
      </div>
    </>
  )
}

export default Brands;
