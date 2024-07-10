import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Contact = ({ user }) => {
  const [patientName, setPatientName] = useState("")
  const [PatientIDCadr, setPatientIDCadr] = useState("")
  const [YourMessage, setYourMessage] = useState("")
  const [recievers, setRecievers] = useState([])
  const [selectedReciver, setSelectedReciver] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log("useEffect with dependencies")
    const fetchRecivers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users")
        const filteredUsers = response.data.filter(
          (user) => user.id !== user.logged_user
        )
        console.log(filteredUsers)
        setRecievers(filteredUsers)
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }

    fetchRecivers()
  }, [user.logged_user])

  useEffect(() => {
    console.log("useEffect no dependencies")

    getMessage()
  }, [])

  const getMessage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/messages")
      const filteredMessage = response.data.filter(
        (message) => message.receiver_id === user.logged_user
      )
      console.log(response.data)
      setMessages(filteredMessage)
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/messages", {
        user_id: user.logged_user,
        receiver_id: selectedReciver,
        content: YourMessage,
      })

      console.log("Message sent successfully:", response.data)
      setPatientName("")
      setPatientIDCadr("")
      setYourMessage("")
      setMessages()
      await getMessage()
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      )
    }
  }

  console.log("rendering")
  return (
    <>
      {user ? (
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
                <label htmlFor="receiverUser">Select Receiver User:</label>
                <select
                  id="receiverUser"
                  value={selectedReciver}
                  onChange={(e) => {
                    setSelectedReciver(e.target.value)
                  }}
                  required
                >
                  {recievers.map((reciever) => (
                    <option key={reciever.id} value={reciever.id}>
                      {reciever.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="YourMassege">Your Message:</label>
                <textarea
                  id="YourMessage"
                  value={YourMessage}
                  onChange={(e) => setYourMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit Request
              </button>
            </form>
          </div>

          <div>
            {" "}
            <div>
              <h3>Received Messages:</h3>
              <ul>
                {messages &&
                  messages.map((message) => (
                    <li key={message.id}>
                      <strong>From: {message.receiver_id}</strong> -{" "}
                      {message.Content}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          <Link to={"/signin"}>Login</Link>
        </>
      )}
    </>
  )
}

export default Contact
