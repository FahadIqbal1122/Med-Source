import axios from "axios"
import React, { useEffect, useState } from "react"
import "../App.css"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("http://localhost:5000/products")
      setProducts(res.data)
    }

    getAllProducts()
  }, [])
  console.log(products)

  return (
    <div className="products-page-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.image}
        />
      ))}
    </div>
  )
}

export default Products
