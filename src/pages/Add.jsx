import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Add = ({ user }) => {
  if (!user) {
    return (
      <div>
        <h1>Please Login</h1>
        <Link to="/SignIn">SignIn</Link>
      </div>
    )
  }
  const [ProductName, setProductName] = useState("")
  const [ProductDescription, setProductDescription] = useState("")
  const [Productcategory, setProductcategory] = useState("")
  const [Productbrand, setProductbrand] = useState("")
  const [ProductPrice, setProductPrice] = useState("")
  const [Productquantity, setProductquantity] = useState("")
  const [Productavailable, setProductavailable] = useState(false)
  const [image, setimage] = useState("")
  useEffect(() => {
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
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:5000/products`, {
        name: ProductName,
        description: ProductDescription,
        price: ProductPrice,
        quantity: Productquantity,
        category: Productcategory,
        brand: Productbrand,
        available: Productavailable,
        image: image
      })

      console.log("Message sent successfully:", response.data)
      setProductName("")
      setProductDescription("")
      setProductcategory("")
      setProductbrand("")
      setProductPrice("")
      setProductquantity("")
      setProductavailable("")
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      )
    }
  }
  console.log(Productavailable)
  return (
    <>
      <div className="contact-form">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ProductName">Product Name:</label>
            <input
              type="text"
              id="ProductName"
              value={ProductName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ProductDescription">Product Description:</label>
            <input
              id="ProductDescription"
              value={ProductDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Productcategory">Product category:</label>
            <input
              id="Productcategory"
              value={Productcategory}
              onChange={(e) => setProductcategory(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Productbrand">Product brand:</label>
            <input
              id="Productbrand"
              value={Productbrand}
              onChange={(e) => setProductbrand(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ProductPrice">Product Price:</label>
            <input
              id="ProductPrice"
              value={ProductPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Productquantity">Product quantity:</label>
            <input
              id="Productquantity"
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
              value={image}
              onChange={(e) => setimage(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Add
