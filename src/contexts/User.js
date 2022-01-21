import { createContext, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [ user , setUser] = useState(null)
  const navigate = useNavigate()
  const {id } = useParams()
  
  const signup = async values => {
    console.log(values)
      const signupResponse = await fetch('http://localhost:5000/auth/signup', {
          method: 'post',
          headers: {
              'Content-type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            bio: values.bio,
        })
      })
      const user = await signupResponse.json()
      console.log(user)
      if (user.error) {
          alert(user.error)
          return
      }
      const loginResponse = await fetch('http://localhost:5000/auth/login', {
          method: 'post',
          headers: {
          'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
          email: user.email,
          password: user.password
          })
          
      })

      if (loginResponse.status >= 400) {
          alert(loginResponse.statusText)
      } else {
        // setUser(user)
        navigate(`/home/${user.firstName}`)
      }
  }

  const getUser = async () => {
    const response = await fetch(`http://localhost:5000/users/${id}/`, {
      credentials: "include"
    })
    const user = await response.json()

   
    setUser(user)
  }


  const createTweet =  async values => {
    const response = await fetch(`http://localhost:5000/tweets`, {
          method: 'post',
          headers: {
              'Content-type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            contents: values.contents,
        })
      })
      const data = await response.json()
      // console.log("responce", data)
  }

  const login = async values => {
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
      })
    })
    const user = await response.json()

    if (response.status >= 400) {
      alert(response.statusText)
  } else {
    setUser(user)
      navigate(`/home/${user.firstName}`)
  }
  }

  const value = {
    signup,
    user,
    getUser,
    createTweet,
    login
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export {
  UserContext,
  UserContextProvider
}