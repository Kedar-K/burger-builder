import React,{Component} from 'react'
import Aux from '../../HOC/Auxilary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component{
    state={
        ingridients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingridients={this.state.ingridients}/>
                </div>
                <div>
                    <BuildControls />
                </div>
            </Aux>
            
        )
    }
}

export default BurgerBuilder;
