import { render } from '@testing-library/react';
import React, {Component} from 'react'
import Aux from '../../../HOC/Auxilary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
    componentDidUpdate(){
        console.log('[Order summary did update]');
    }
    render(){
    const ingridientSummary =   Object.keys(this.props.ingridients)
    .map(igKey =>{
    return( 
        <li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span>: {this.props.ingridients[igKey]}
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
                <p>Total Price: {this.props.totalPrice.toFixed(2)}</p>
                <p>continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceller}>
                    CANCEL
                </Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>
                    CONTINUE
                </Button>
            </Aux>
            )
    }

    
}

export default OrderSummary;