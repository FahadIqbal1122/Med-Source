import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
const RequestMed = ({ user }) => {
  const [medicines, setMedicines] = useState([])
  const [selectedMedicine, setSelectedMedicine] = useState("")
  const [requestDetails, setRequestDetails] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted with:", {
      requestDetails,
    })
    const sent = await axios.post(`http://localhost:5000/request`, {
      user_id: user.logged_user,
      product_ids: selectedMedicine,
    })

    const emailResponse = await axios.post(`http://localhost:5000/send-email`, {
      user_email: "osamamohammad343@gmail.com",
      medicine_name: medicines.find(
        (med) => med.id === parseInt(selectedMedicine)
      ).name,
      patient: user.username,
      requestDetails: requestDetails,
    })
    console.log(emailResponse)
    console.log(sent)

    setRequestDetails("")
  }
  useEffect(() => {
    const get_products = async () => {
      const response = await axios.get(`http://localhost:5000/products`)
      const availableMedicines = response.data.filter(
        (medicine) => !medicine.available
      )
      console.log(availableMedicines)
      setMedicines(availableMedicines)
    }
    get_products()
    console.log(user)
  }, [])
  console.log(requestDetails)
  return (
    <div className="request-med">
      {user ? (
        <>
          <button
            onClick={() => {
              navigate("/RequestedProducts")
            }}
          >
            Your Requested products
          </button>
          <h2>Request Medical Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="MedicineName">Medicine Name:</label>
              <select
                id="medicine"
                value={selectedMedicine}
                onChange={(e) => setSelectedMedicine(e.target.value)}
                required
              >
                <option value="">Select a medicine</option>
                {medicines.map((medicine) => (
                  <option key={medicine.id} value={medicine.id}>
                    {medicine.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="requestDetails">Request Details:</label>
              <textarea
                id="requestDetails"
                value={requestDetails}
                onChange={(e) => setRequestDetails(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit Request
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          <Link to={"/signin"}>Login</Link>
          <Link to={"/signin"}>Login</Link>
        </>
      )}
    </div>
  )
}

export default RequestMed
