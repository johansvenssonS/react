
function ControllCount(props){

    const handleClick = (number) =>{
        props.setCount(props.number + number )
        props.setShowSuccess(true)

    }



    return(
        <>
        <button onClick={()=>handleClick(1)}>Öka</button>
        <button onClick={()=>handleClick(-1)}>Minska</button>

        {
            props.showSuccess ? (
                <p>lyckats</p>

            ):null
        }
        </>
    )
}
export default ControllCount