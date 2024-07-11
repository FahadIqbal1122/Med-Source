import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/Auth"
import Popup from "../components/Popup"

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await RegisterUser({
        first_name: formValues.name,
        last_name: formValues.name,
        email: formValues.email,
        phone_number: formValues.phone,
        password: formValues.password,
        patient: true,
      })
      setFormValues({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      })
      setError(null)
      navigate("/signin")
    } catch (error) {
      console.error("Error Logging in user:", error)
      setError(
        error.response?.data?.message || "An error occurred during registration"
      )
    }
  }

  return (
    <div className="signin-page">
      <div className="signin-left">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Maryam Almutawa"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone number">Phone:</label>
            <input
              onChange={handleChange}
              name="phone"
              type="number"
              placeholder="39393939"
              value={formValues.phone}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="login-button"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign up
          </button>
        </form>
        {error && <h1>{error}</h1>}
      </div>
      <div className="signin-right">
        <img src="../public/images/register.png" alt="Sign In Illustration" />
      </div>
    </div>
  )
}

export default Register
