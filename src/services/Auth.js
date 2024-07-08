import Client from "./api"
export const SignInUser = async (data) => {
  try {
    const res = await Client.post("http://localhost:5000/login", data)
    localStorage.setItem("token", res.data.access_token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("http://localhost:5000/users", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get("/auth/session")
    return res.data
  } catch (error) {
    throw error
  }
}
