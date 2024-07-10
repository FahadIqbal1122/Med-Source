import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = ({ user }) => {
  const [ProductName, setProductName] = useState('')
  const [ProductDescription, setProductDescription] = useState('')
  const [Productcategory, setProductcategory] = useState('')
  const [Productbrand, setProductbrand] = useState('')
  const [ProductPrice, setProductPrice] = useState('')
  const [Productquantity, setProductquantity] = useState('')
  const [Productavailable, setProductavailable] = useState(false)
  const [image, setimage] = useState('')
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const fetchinform = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
    fetchinform()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:5000/${id}`, {
        name: ProductName,
        description: ProductDescription,
        price: ProductPrice,
        quantity: Productquantity,
        category: Productcategory,
        brand: Productbrand,
        available: Productavailable,
        image: image
      })

      console.log('Message sent successfully:', response.data)
      setProductName('')
      setProductDescription('')
      setProductcategory('')
      setProductbrand('')
      setProductPrice('')
      setProductquantity('')
      setProductavailable('')
    } catch (error) {
      console.error(
        'Error sending message:',
        error.response?.data || error.message
      )
    }
  }
  console.log(Productavailable)
  return (
    <>
      <div className="contact-form">
        <h2>Edit Product</h2>
        {product ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="ProductName">Product Name:</label>
              <input
                type="text"
                id="ProductName"
                placeholder={product.name}
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ProductDescription">Product Description:</label>
              <input
                id="ProductDescription"
                placeholder={product.description}
                value={ProductDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Productcategory">Product category:</label>
              <input
                id="Productcategory"
                placeholder={product.category}
                value={Productcategory}
                onChange={(e) => setProductcategory(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Productbrand">Product brand:</label>
              <input
                id="Productbrand"
                placeholder={product.brand}
                value={Productbrand}
                onChange={(e) => setProductbrand(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ProductPrice">Product Price:</label>
              <input
                id="ProductPrice"
                placeholder={product.price}
                value={ProductPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Productquantity">Product quantity:</label>
              <input
                id="Productquantity"
                placeholder={product.quantity}
                value={Productquantity}
                onChange={(e) => setProductquantity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Productavailable">Product available:</label>
              <input
                type="checkbox"
                id="Productavailable"
                checked={Productavailable}
                onChange={(e) => setProductavailable(e.target.checked)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Product image:</label>
              <input
                id="image"
                placeholder={product.image}
                value={image}
                onChange={(e) => setimage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <p>Form is loading</p>
        )}
      </div>
    </>
  )
}

export default Edit
