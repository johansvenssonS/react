import { useState } from 'react'

function Btn(){
    let fruits = ["äpple", "banan", "päron", "kiwi", "apelsin", "melon", "jordgubbe", "hallon", "blåbär", "citron"]
    let colors = ["red", "yellow", "green", "brown", "orange", "lightgreen", "pink", "darkred", "blue", "lightyellow"]
    const [i, setI] = useState(0)
    return(
        <>
            <h1>{fruits[i]}</h1>
            <button style={{ padding: '10px', margin: '5px', color: 'white', backgroundColor: colors[i] }} 
            onClick={() => setI((prev) => (prev + 1) % fruits.length)} >Next</button>
        </>
    )
}
export default Btn