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
    <div className="request-med">
      <div className="form-group">
        {requests.map((req) => (
          <div key={req.id}>
            {req.products.map((pro) => (
              <div key={pro.id}>
                <img src={pro.image} />
                <h2>{pro.name}</h2>
                <p>{pro.description}</p>
                <p>{pro.id}</p>
                <p>req: {req.id}</p>
                <div className="headerLogin">
                  <button id="logout" onClick={() => Removeit(req.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default RequestedProducts
