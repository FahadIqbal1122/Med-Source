import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RequestedProducts = ({ user }) => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const getRequests = async () => {
      const response = await axios.get(
        `http://localhost:5000/request/${user.logged_user}`
      )
      console.log(response.data)
      setRequests(response.data)
    }
    getRequests()
  }, [])
  return (
    <div>
      {requests.map((req) => (
        <div key={req.id}>
          {req.products.map((pro) => (
            <div key={pro.id}>
              <img src={pro.image} />
              <h2>{pro.name}</h2>
              <p>{pro.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default RequestedProducts
