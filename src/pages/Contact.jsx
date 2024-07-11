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
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchRecievers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users")
        const loggedUserId = user.logged_user

        let filteredUsers
        if (user.patient) {
          filteredUsers = response.data.filter(
            (user) => !user.patient && user.id !== loggedUserId
          )
        } else {
          filteredUsers = response.data.filter(
            (user) => user.patient && user.id !== loggedUserId
          )
        }

        setRecievers(filteredUsers)
        setUsers(response.data)
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }

    fetchRecievers()
  }, [user])

  useEffect(() => {
    getMessage()
  }, [])

  const getMessage = async () => {
    try {
      const response = await axios.get("http://localhost:5000/messages")
      const filteredMessage = response.data.filter(
        (message) => message.receiver_id === user.logged_user
      )
      setMessages(filteredMessage)
    } catch (error) {
      console.error("Error fetching messages:", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedReciver) {
      alert("Please select a receiver")
      return
    }

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
      setSelectedReciver("")
      await getMessage()
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      )
    }
  }

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId)
    return user ? user.name : "Unknown User"
  }

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
                  type="number"
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
                  onChange={(e) => setSelectedReciver(e.target.value)}
                  required
                >
                  <option value="">Select a receiver</option>
                  {recievers.map((reciever) => (
                    <option key={reciever.id} value={reciever.id}>
                      {reciever.first_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="YourMessage">Your Message:</label>
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

          <div className="service2">
            <h3>Received Messages:</h3>
            <ul>
              {messages &&
                messages.map((message) => (
                  <li key={message.id}>
                    <strong>Meesage: {getUserName(message.user_id)}</strong> -{" "}
                    {message.Content}
                  </li>
                ))}
            </ul>
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
