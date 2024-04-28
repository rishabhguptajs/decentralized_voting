import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Signup = () => {
  const [name, setName] = useState('')
  const [aadhar, setAadhar] = useState('')
  const [voterID, setVoterID] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/users/register', {
      name
    })
    setUser(response.data)
  }

  return (
    <div className='h-[100vh] w-[100vw] flex flex-row items-center text-center justify-center'>
      <h1 className='flex'>Company Name</h1>
    </div>
  )
}

export default Signup