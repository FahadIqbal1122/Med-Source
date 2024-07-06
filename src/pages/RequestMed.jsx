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
      <div>
        <h2>Request Medical Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="MedicineName">Medicine Name:</label>
            <textarea
              id="MedicineName"
              value={MedicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="requestDetails">Request Details:</label>
            <textarea
              id="requestDetails"
              value={requestDetails}
              onChange={(e) => setRequestDetails(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </>
  )
}

export default RequestMed
