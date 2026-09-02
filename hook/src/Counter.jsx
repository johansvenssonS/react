import {useState} from 'react';
import Squares from './Squares';


function Counter() {
    const [count, setCount] = useState(0);
    let mynt;
    if(count%2 === 0){
        mynt = 'jämt'
    } else{
        mynt = 'udda'
    }
    const squares = [];
    for (let i = 0; i < count; i ++){
        squares.push(<Squares key={i}/>);
    }
        
    return (
        <div>
            <h2>nummer: {count}</h2>
            <button onClick={()=> setCount(count + 1)}>Öka</button>
            <h3>{mynt}</h3>
            <button onClick={()=> setCount(count - 1)}>Minska</button>
            <div>{squares}</div>

        </div>


    )
}
export default Counter