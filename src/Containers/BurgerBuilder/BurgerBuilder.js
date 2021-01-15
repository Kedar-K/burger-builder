import React,{Component} from 'react'
import Aux from '../../HOC/Auxilary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../Components/UI/Spinner/Spinner'

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
        totalPrice: 4,
        purchesable: false,
        purchasing: false,
        loading: false
    }


    purchaseHandeller =() =>{
        return(
            this.setState({purchasing: true})
        )
    }

    updatePurchaseState =(ingridients) =>{

        const sum = Object.keys(ingridients)
        .map(igKey => {
            return ingridients[igKey]
        })
        .reduce((sum,el)=>{
            return sum + el;
        }, 0)

        this.setState({purchesable: sum>0})
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
        this.setState({ingridients: updatedIngridients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngridients);

    }


    removeIngridientHandeller =(type) =>{
        const oldCount = this.state.ingridients[type];
        if (oldCount<=0){
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
        const priceDeduction = INGRIDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ingridients: updatedIngridients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngridients);
    }

    purchaseCalcelHandeller = () =>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandeller =() =>{
        // alert('you continue')
        this.setState({loading: true})
        const order ={
            ingridients: this.state.ingridients,
            price: this.state.totalPrice,
            customer: {
                name: 'Kedar',
                address: {
                    street: 'test street',
                    zipCode: '413517',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => this.setState({loading: false, purchasing: false}))
        .catch(error => this.setState({loading: false, purchasing: false}))
    }

    render() {
        // console.log(this.state);
        const disableInfo ={
            ...this.state.ingridients
        }
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key]<=0;
        }
        //console.log(disableInfo['salad']);
        let orderSummary = <OrderSummary ingridients={this.state.ingridients}
        purchaseCanceller={this.purchaseCalcelHandeller}
        purchaseContinue={this.purchaseContinueHandeller}
        totalPrice={this.state.totalPrice}
        />
        if(this.state.loading){
            orderSummary=<Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCalcelHandeller}>
                    {orderSummary}
                </Modal>
                <div>
                    <Burger ingridients={this.state.ingridients}/>
                </div>
                <div>
                    <BuildControls
                    ingridientAdded={this.addIngridientHandeller}
                    ingridientDeducted = {this.removeIngridientHandeller}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchesables={this.state.purchesable}
                    ordered={this.purchaseHandeller} />
                </div>
            </Aux>
            
        )
    }
}

export default BurgerBuilder;
