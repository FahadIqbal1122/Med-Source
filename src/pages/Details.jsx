import React from "react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import "../App.css"

const Details = (props) => {
    useEffect(() => {
        const getAllProducts = async () => {
          const res = await axios.get("http://localhost:5000/products")
          setProducts(res.data)
        }
    
        getAllProducts()
      }, [])
    return (
        <div key={props.id} className="product-card" >
            <div className="product-img">
                <img src={props.img} alt="product image" />
            </div>
            <div className="product-card-info">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}


export default Details
