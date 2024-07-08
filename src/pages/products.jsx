import axios from "axios"
import React, { useEffect, useState } from "react"
import "../App.css"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])

  const handleSubmit = async (Details) => {
    navigate(`${Details}`)
  }

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("http://localhost:5000/products")
      setProducts(res.data)
    }

    getAllProducts()
  }, [])
  console.log(products)

  return (
    <div className="products-page-container"  onClick={() => handleSubmit('Details')}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.image}
          onClick={() => handleSubmit(product.image)}
        />
      ))}
    </div>
  )
}

export default Products
