import axios from "axios"
import { useState, useEffect } from "react"

const MyMedicines = ({ user }) => {
  const [products, setProducts] = useState(null)
  const [change, setChange] = useState(false)

  const checkIfListtExists = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/medication_lists/${user.logged_user}`
      )
      return response.data && Object.keys(response.data).length > 0
    } catch (error) {
      console.error("Error checking for list:", error)
      return false
    }
  }

  useEffect(() => {
    const initializeList = async () => {
      const listExists = await checkIfListtExists()
      if (!listExists) {
        const newlistData = await createNewlist(user.logged_user, 0)
        if (newlistData) {
          console.log("New list created successfully")
        }
      }
    }
    const getProducts = async () => {
      console.log("this is get products")
      const response = await axios.get(
        `http://localhost:5000/medication_lists/${user.logged_user}`
      )
      console.log("products", response.data)
      setProducts(response.data.products)
    }
    getProducts()
    initializeList()
  }, [change])
  console.log(products)
  const createNewlist = async (user_id, totalAmount) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/medication_lists`,
        {
          user_id: user_id,
          product_id: [],
          total_amount: totalAmount,
        }
      )
      return response.data
    } catch (error) {
      console.error("Error creating list:", error)
      return null
    }
  }

  const RemoveProduct = async (pro_id) => {
    const res = await axios.put(
      `http://localhost:5000/medication_lists/${user.logged_user}/${pro_id}`
    )
    console.log(res)
    setChange(true)
  }

  return (
    <div>
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
    </div>
  )
}

export default MyMedicines
