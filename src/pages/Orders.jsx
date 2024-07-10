import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Orders = ({ user }) => {
  //console.log(user)

  const [products, setProducts] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:5000/carts/${user.logged_user}`
      )
      console.log(response.data)
      setProducts(response.data)
    }
    getData()
  }, [user])
  console.log(products)

  return (
    <div>
      {products ? (
        <div>
          {products.products.map((pro) => (
            <div key={pro.id}>
              <h2>{pro.name}</h2>
            </div>
          ))}
          <p>Total Amount: {products.total_amount}</p>
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  )
}
export default Orders
