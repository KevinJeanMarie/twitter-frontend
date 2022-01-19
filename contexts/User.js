import { createContext, useState } from "react"
import { useNavigate } from 'react-router-dom'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [ user , setUser] = useState()
  const navigate = useNavigate()

    
  const signup = async values => {
    console.log(values)
  //   const user = {
  //     email: values.email,
  //     password: values.password,
  //     firstName: values.username,
  //     lastName: values.lastName,
  //     bio: values.bio,
  // }
  // console.log(user)
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
        setUser(user)
          navigate('/profil')
      }
  }

  const getUser = async (id) => {
    const response = await fetch(`http://localhost:5000/users/${id}/`, {
      credentials: "include"
    })
    await response.json()
  }


  const createTweet =  async values => {
    const id = user.id
    const response = await fetch(`http://localhost:5000/tweets/${id}`, {
          method: 'post',
          headers: {
              'Content-type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            contens: values.contents,
        })
      })
      await response.json()
      console.log(response)
      console.log(user)

  }


  const value = {
    signup,
    user,
    getUser,
    createTweet
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