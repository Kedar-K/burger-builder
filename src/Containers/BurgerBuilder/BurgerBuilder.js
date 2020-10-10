import React,{Component} from 'react'
import Aux from '../../HOC/Auxilary'
import Burger from '../../Components/Burger/Burger'

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
                    Burger Controls
                </div>
            </Aux>
            
        )
    }
}

export default BurgerBuilder;
