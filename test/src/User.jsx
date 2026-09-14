function User(props){


    return(
        <>
      <li key={props.user.id} className='user-row'>
        <p> {props.user.name}</p>
      </li>
    
        </>
    )
}

export default User