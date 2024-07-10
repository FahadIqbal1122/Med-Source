import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigator } from 'react-router-dom'

const RequestedProducts = () => {
  useEffect(() => {
    const fetchinfo = async () => {
      const response = await axios.get(`http://localhost:5000/request`)
      console.log(response)
    }
    fetchinfo()
  }, [user])
  return <div></div>
}
export default RequestedProducts
