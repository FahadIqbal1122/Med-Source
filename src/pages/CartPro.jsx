import axios from "axios"
import { useState, useEffect } from "react"

const CartPro = ({ user }) => {
  const [products, setProducts] = useState({})

  const checkIfCartExists = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/carts/${user.logged_user}`
      )
      return response.data && Object.keys(response.data).length > 0
    } catch (error) {
      console.error("Error checking for cart:", error)
      return false
    }
  }

  useEffect(() => {
    const initializeCart = async () => {
      const cartExists = await checkIfCartExists()
      if (!cartExists) {
        const newCartData = await createNewCart(user.logged_user, 0)
        if (newCartData) {
          console.log("New cart created successfully")
        }
      }
      // Fetch products regardless of whether a new cart was created
    }
    const getProducts = async () => {
      const response = await axios.get(
        `http://localhost:5000/carts/${user.logged_user}`
      )
      console.log("products", response.data)
      setProducts(response.data)
    }
    getProducts()
    initializeCart()
  }, [])
  console.log(products)
  const createNewCart = async (user_id, totalAmount) => {
    try {
      const response = await axios.post(`http://localhost:5000/carts`, {
        user_id: user_id,
        product_id: [],
        total_amount: totalAmount,
      })
      return response.data
    } catch (error) {
      console.error("Error creating cart:", error)
      return null
    }
  }

  const RemoveProduct = async () => {
    const res = await axios.put(
      `http://localhost:5000/carts/${user.logged_user}`
    )
    console.log(res)
  }

  return (
    <div>
      {products.products.map((pro) => (
        <div key={pro.id}>
          <img src={pro.image} />
          <h2>{pro.name}</h2>
          <p>{pro.description}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default CartPro
