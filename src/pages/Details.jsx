import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import "../App.css"

const Details = ({ user }) => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get(`http://localhost:5000/products/${productId}`)
      console.log(res)
      setProducts(res.data)
    }

    getAllProducts()
  }, [])

  const addToCart = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/carts/${user.logged_user}`,
        { product_id: [products.id] }
      )
      setMessage("Added to cart")
      console.log(res)
    } catch (error) {
      setMessage("Failed to add to cart")
    }
  }
  const deleteIt = async () => {
    const response = await axios.delete(
      `http://localhost:5000/products/${productId}`
    )
    console.log(response.data)
  }

  const addToList = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/medication_lists/${user.logged_user}`,
        { product_id: [products.id] }
      )
      setMessage("Added to List")
      console.log(res)
    } catch (error) {
      setMessage("Failed to add to List")
    }
  }

  return (
    <>
      <div className="productsdetails-page-container">
        <img src={products.image} alt="proimg" />
        <h1>{products.name}</h1>
        <h3>{products.category}</h3>
        <p>{products.description}</p>
        <p>{products.price} BD</p>
        {user && (
          <>
            <button onClick={addToCart}>Add to cart</button>
            <button onClick={addToList}>Add to List</button>
          </>
        )}
      </div>

      {user && user.patient === false && (
        <>
          <button
            onClick={() => {
              navigate(`/Edit/${products.id}`)
            }}
            className="submit-button"
          >
            Edit Product
          </button>
          <button onClick={deleteIt} className="submit-button">
            Delete Product
          </button>
        </>
      )}
      {message && <h1>{message}</h1>}
    </>
  )
}

export default Details
