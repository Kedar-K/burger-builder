import React,{Component} from 'react'
import Aux from '../../HOC/Auxilary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const INGRIDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.2,
    meat: 1,
    bacon: 0.7
}

class BurgerBuilder extends Component{
    state={
        ingridients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngridientHandeller =(type) =>{
        const oldCount = this.state.ingridients[type]
        const updatedCount = oldCount + 1
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingridients: updatedIngridients, totalPrice: newPrice});
    }

    removeIngridientHandeller =(type) =>{
        const oldCount = this.state.ingridients[type]
        const updatedCount = oldCount - 1
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
        const priceDeduction = INGRIDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ingridients: updatedIngridients, totalPrice: newPrice});
    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingridients={this.state.ingridients}/>
                </div>
                <div>
                    <BuildControls
                    ingridientAdded={this.addIngridientHandeller}
                    ingridientDeducted = {this.removeIngridientHandeller} />
                </div>
            </Aux>
            
        )
    }
}

export default BurgerBuilder;
