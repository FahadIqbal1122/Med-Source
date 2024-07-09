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
          <div className="inside-brands" onClick={() => handleNavigate('lytess')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/lytess_1-285x123.5.png" alt="Lytess" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('tommee')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/tommee_1-285x123.5.png" alt="Tommee" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('dr-organic')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/dr-organic_1-285x123.5.png" alt="Dr. Organic" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('fair-lovely')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/fair-lovely-285x123.5.png" alt="Fair & Lovely" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('nan')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/nan-285x123.5.png" alt="Nan" />
          </div>
          <div className="inside-brands"onClick={() => handleNavigate('cerelac')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/cerelac-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands"onClick={() => handleNavigate('clarins')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/clarins-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands"onClick={() => handleNavigate('kiss')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/kiss-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands"onClick={() => handleNavigate('tea-tree')}>
            <img src="https://api.nasserpharmacy.com/images?file=tea-tree-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands"onClick={() => handleNavigate('priorin')}>
            <img src="https://api.nasserpharmacy.com/images?file=//brands/priorin-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('nbty')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/nbty_1-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('rx')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/rx-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('bourjois')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/bourjois-285x123.5.png" alt="Cerelac" />
          </div>
          <div className="inside-brands" onClick={() => handleNavigate('NIVEA')}>
            <img src="https://api.nasserpharmacy.com/images?file=/brands/NIVEA_logo-285x123.5.png" alt="Cerelac" />
          </div>

          
          
          
        </div>
      </div>
    </>
  )
}

export default Brands;
