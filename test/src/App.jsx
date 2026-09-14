import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

import User from './User'


function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])


  useEffect(() => {
    const fetchData = async() => {
      try{

        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
        console.log(data)
      }catch{
        console.log("error")
      }
    }
    fetchData()
  },[])
  

  const clickEvent = (user) => {
   console.log(user.username)
  console.log(user.email)
    
    
  }



  return (

    <>
    

    {
      users.map(user => (
        <ul onClick={() => clickEvent(user)} className='user-row'>
         <li >
          <User user={user}></User>
          </li>
        </ul>
    )  

      )
    }
    </>
  )
}

export default App
