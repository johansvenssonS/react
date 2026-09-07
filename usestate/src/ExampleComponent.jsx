import { useEffect } from "react";


function ExampleComponent(props){
    



    return (
        <>
        <ul>
            
        {props.users.map(user => 
            <li key={user.id}>
                <p>namn:{user.name}</p> 
                <p>username: {user.username}</p>
                <p> email: {user.email} </p>
            </li>
        )}
        </ul>
        </>
    
    )
}


export default ExampleComponent