import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

const CartPro = ({ user }) => {
  const [products, setProducts] = useState(null)
  const [change, setChange] = useState(false)

  const navigate = useNavigate()
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
      console.log("this is get products")
      const response = await axios.get(
        `http://localhost:5000/carts/${user.logged_user}`
      )
      console.log("products", response.data)
      setProducts(response.data.products)
    }
    getProducts()
    initializeCart()
  }, [change])
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

  const RemoveProduct = async (pro_id) => {
    const res = await axios.put(
      `http://localhost:5000/carts/${user.logged_user}/${pro_id}`
    )
    console.log(res)
    setChange(true)
  }

  return (
    <div>
      {user ? (
        <>
          {products ? (
            products.map((pro) => (
              <div key={pro.id}>
                <img src={pro.image} alt={pro.name} />
                <h2>{pro.name}</h2>
                <p>{pro.description}</p>
                <button onClick={() => RemoveProduct(pro.id)}>Remove</button>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
          <button
            onClick={() => {
              navigate("/orders")
            }}
          >
            Checkout
          </button>
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          <Link to={"/signin"}>Login</Link>
        </>
      )}
    </div>
  )
}

export default CartPro
