import { useState } from 'react'
import './App.css'
import ExampleComponent from './ExampleComponent'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() =>{
        const getData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json()
                // console.log(data)
                setUsers(data);
                return data
            } catch (error) {
                console.log(error,"fel")
            }finally{
              setLoading(false)
            }
        
    }
        
       getData()
    }, []);
    if(loading){
            return <h2>Laddar....</h2>
        }
    
  

  return (
    <ExampleComponent
    users={users}  >

    </ExampleComponent>
  )
}

export default App
