import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <>
      <Link to={`/games/details/${props.id}`}></Link>
      <div key={props.id} className="product-card" onClick={props.onClick}>
        <div className="product-img">
          <img src={props.img} alt="product image" />
        </div>
        <div className="product-card-info">
          <h3>{props.name}</h3>
          <p>{props.price} BD</p>
        </div>
      </div>
    </>
  )
}

export default ProductCard
