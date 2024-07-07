import React, { useState } from 'react'
const RequestMed = () => {
  const [patientName, setPatientName] = useState('')
  const [MedicineName, setMedicineName] = useState('')
  const [requestDetails, setRequestDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with:', {
      patientName,
      MedicineName,
      requestDetails
    })
    setPatientName('')
    setMedicineName('')
    setRequestDetails('')
  }

  return (
    <>
      <div className="request-med">
        <h2>Request Medical Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="MedicineName">Medicine Name:</label>
            <input
              id="MedicineName"
              value={MedicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              required
            />
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
          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      </div>
    </>
  )
}

export default RequestMed
