import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RequestedProducts = ({ user }) => {
  const [requests, setRequests] = useState([])
  const [newData, setNewData] = useState(false)

  useEffect(() => {
    const getRequests = async () => {
      const response = await axios.get(`http://localhost:5000/request`)
      console.log(response.data)
      setRequests(response.data)
    }
    getRequests()
  }, [newData])
  const Removeit = async (proId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/request/${proId}`
      )
      console.log(response.data)
      setNewData(!newData)
    } catch (error) {}
  }
  return (
    <div>
      {requests.map((req) => (
        <div key={req.id}>
          {req.products.map((pro) => (
            <div key={pro.id}>
              <img src={pro.image} />
              <h2>{pro.name}</h2>
              <p>{pro.description}</p>

              <button onClick={() => Removeit(req.id)}>Remove</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default RequestedProducts
