import React, { useState } from 'react'

const RequestMed = () => {
  const [patientName, setPatientName] = useState('')
  const [medicalHistory, setMedicalHistory] = useState('')
  const [requestDetails, setRequestDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with:', {
      patientName,
      medicalHistory,
      requestDetails
    })
    setPatientName('')
    setMedicalHistory('')
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
            <label htmlFor="medicalHistory">Medical History:</label>
            <textarea
              id="medicalHistory"
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
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
