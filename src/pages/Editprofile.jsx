import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Editprofile = ({ user }) => {
  const { userId } = useParams()
  const Navigate = useNavigate()
  const { response, setResponse } = useState([])

  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    phone_number: ''
  })

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/users/${user.logged_user}`
        )
        const userData = res.data
        setFormData({
          email: userData.email,
          first_name: userData.first_name,
          last_name: userData.last_name,
          password: '',
          Mobile: userData.phone_number
        })
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    fetchUserProfile()
  }, [userId, user.logged_user])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(
        `http://localhost:5000/users/${user.logged_user}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      Navigate(`/profile/${userId}`)
    } catch (error) {
      console.error('Error updating user profile:', error)
    }
  }

  return (
    <div>
      <h2>Edit User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Editprofile
