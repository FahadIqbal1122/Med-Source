import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import "../App.css"

const Details = ({ user }) => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get(`http://localhost:5000/products/${productId}`)
      console.log(res)
      setProducts(res.data)
    }

    getAllProducts()
  }, [])

  const addToCart = async () => {
    const res = await axios.put(
      `http://localhost:5000/carts/${user.logged_user}`,
      { product_id: [products.id] }
    )
    console.log(res)
  }

  return (
    <>
      <div className="productsdetails-page-container">
        <img src={products.image} alt="proimg" />
        <h2>{products.brand}</h2>
        <h3>{products.category}</h3>
        <p>{products.description}</p>
        <p>{products.price}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>

      <button
        onClick={() => {
          navigate(`/Edit/${products.id}`)
        }}
        className="submit-button"
      >
        Edit Product
      </button>
      <button
        onClick={() => {
          navigate("/Products")
        }}
        className="submit-button"
      >
        Delete Product
      </button>
    </>
  )
}

export default Details
