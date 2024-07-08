import React from "react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import "../App.css"
import cardDetails from "../components/cardDetails"

const Details = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getAllProducts = async () => {
          const res = await axios.get("http://localhost:5000/products")
          setProducts(res.data)
        }
    
        getAllProducts()
      }, [])
    return (
        <div className="productsdetails-page-container" >
      {products.map((product) => (
        <cardDetails
          key={product.id}
          id={product.id}
          name={product.name}
          description= {product.description}
          price={product.price}
          img={product.image}
        />
      ))}
    </div>
    )
}

export default Details
