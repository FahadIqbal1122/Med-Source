import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/Auth"

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
    navigate("/signin")
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
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
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
