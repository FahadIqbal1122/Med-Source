import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Profile = ({ user }) => {
  //const { userId } = useParams()
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/users/${user.logged_user}`
        )
        console.log(res)
        setUserProfile(res.data)
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    getUserProfile()
  }, [user.logged_user])

  if (!userProfile) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div>
        <h2>User Profile</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>phone number: {userProfile.Mobile}</p>
        <Link to={`/profile/edit/${user.logged_user}`}>Edit Profile</Link>
      </div>
    </>
  )
}

export default Profile
