import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const RequestMed = ({ user }) => {
  const [patientName, setPatientName] = useState('')
  const [medicines, setMedicines] = useState([])
  const [selectedMedicine, setSelectedMedicine] = useState('')
  const [requestDetails, setRequestDetails] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted with:', {
      patientName,

      requestDetails
    })
    const sent = await axios.post(`http://localhost:5000/request`, {
      user_id: user,
      product_ids: selectedMedicine
    })
    console.log(sent)
    setPatientName('')
    setMedicineName('')
    setRequestDetails('')
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
  console.log(selectedMedicine)
  return (
    <div className="request-med">
      <button
        onClick={() => {
          navigate('/RequestedProducts')
        }}
      >
        Your Requested products
      </button>
      <h2>Request Medical Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="number"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
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
    </div>
  )
}

export default RequestMed
