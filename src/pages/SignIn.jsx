import { useState } from "react"
import { SignInUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

const SignIn = (props) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = await SignInUser(formValues)
      setFormValues({ email: "", password: "" })
      props.setUser(payload)
      setError(null)
      navigate("/products")
    } catch (error) {
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
            <label htmlFor="email">Email :</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password :</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button
            className="login-button"
            disabled={!formValues.email || !formValues.password}
          >
            Login
          </button>
        </form>
        {error && <h1>{error}</h1>}
      </div>
      <div className="signin-right">
        <img src="../public/images/login.png" alt="Sign In Illustration" />
      </div>
    </div>
  )
}

export default SignIn
