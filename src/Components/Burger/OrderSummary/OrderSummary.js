import React from 'react'
import Aux from '../../../HOC/Auxilary'

const ordersummary = (props) =>{
    const ingridientSummary =   Object.keys(props.ingridients)
    .map(igKey =>{
    return( 
        <li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingridients[igKey]}
        </li>
    );
    }); 

    return(
    <Aux>
        <h3>Your order</h3>
        <p>a delicious burger with the following ingridients:</p>
        <ul>
            {ingridientSummary}
        </ul>
        <p>continue to checkout?</p>
    </Aux>
    )
}

export default ordersummary;