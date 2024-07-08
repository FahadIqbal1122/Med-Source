import Brands_card from './BrandCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Brands = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const getBrands = async () => {
      try {
        let response = await axios.get('http://localhost:5000/products')
        console.log(response)
      } catch (err) {
        console.error(`error in categories ${err}`)
      }
    }
    getBrands()
  }, [])

  return <div></div>
}

export default Brands
