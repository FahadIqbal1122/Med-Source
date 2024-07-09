import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (productId) => {
    navigate(`/products/details/${productId}`)
  }

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get('http://localhost:5000/products')
      setProducts(res.data)
      console.log(res)
    }

    getAllProducts()
  }, [])
  console.log(products)

  return (
    <>
      <div className="products-page-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.image}
            onClick={() => handleSubmit(product.id)}
          />
        ))}
      </div>
      <div>
        <button
          className="submit-button"
          onClick={() => {
            navigate('/Add')
          }}
        >
          Add Product
        </button>
      </div>
    </>
  )
}

export default Products
