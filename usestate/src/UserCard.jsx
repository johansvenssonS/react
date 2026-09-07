import { useState } from "react";



function UserCard(props){
    const [colorindex, setColorIndex] = useState(0)


    const colors =  ["red","blue","green", "yellow", "orange","grey","white"]


    return (
        <>
        <div style={colors}>{props.username}: {props.email}</div>
        
        </>

    )


}