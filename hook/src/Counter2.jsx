import { useState } from "react"

function Counter2(){


    const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <button onClick={()=> setIsOpen(!isOpen)}>
                {isOpen? "Dölj": "Visa"}
            </button>
        </div>
    )

}

export default Counter2