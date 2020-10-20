import React from 'react'
import Aux from '../../../HOC/Auxilary'
import Button from '../../UI/Button/Button'

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
    <p>Total Price: {props.totalPrice}</p>
        <p>continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCanceller}>
            CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>
            CONTINUE
        </Button>
    </Aux>
    )
}

export default ordersummary;