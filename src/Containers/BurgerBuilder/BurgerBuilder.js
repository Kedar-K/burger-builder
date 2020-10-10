import React,{Component} from 'react'
import Aux from '../../HOC/Auxilary'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component{
    state={
        ingridients:{
            salad: 1,
            bacon: 2,
            cheese: 2,
            meat: 1
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
