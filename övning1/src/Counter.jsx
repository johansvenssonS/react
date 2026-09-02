import CounterHistory from "./CounterHistory"
function Counter(props){
    return(
        <>
        <p>Antal: {props.number}</p>
        <button onClick={()=>props.setCount(props.number + 1 )}>Öka</button>
        <CounterHistory last = {props.number}></CounterHistory>
        </>
    )
}
export default Counter