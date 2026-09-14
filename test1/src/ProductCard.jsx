import Description from "./Description"
import Title from "./Title"

function ProductCard(props){



    return(
        <div key={props.product.id}>

        <Title title={props.product.title}></Title>
        <Description description= {props.product.description}></Description>
        </div>
    )
}

export default ProductCard