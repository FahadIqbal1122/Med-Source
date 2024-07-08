import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [patientName, setPatientName] = useState("")
  const [PatientIDCadr, setPatientIDCadr] = useState("")
  const [YourMassege, setYourMassege] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/messages", {
        user_id: 2,
        receiver_id: 4,
        content: YourMassege,
      })

      console.log("Message sent successfully:", response.data)
      setPatientName("")
      setPatientIDCadr("")
      setYourMessage("")
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      )
    }
  }

  return (
    <>
      <div className="contact-form">
        <h2>Patient Information</h2>
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
            <label htmlFor="PatientIDCadr">Patient CPR</label>
            <input
              id="PatientIDCadr"
              value={PatientIDCadr}
              onChange={(e) => setPatientIDCadr(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="YourMassege">Your Massege:</label>
            <textarea
              id="YourMassege"
              value={YourMassege}
              onChange={(e) => setYourMassege(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
