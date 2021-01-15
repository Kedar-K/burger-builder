import React, {Component} from 'react';
import classes from './Modal.module.css'
import Auxillary from '../../../HOC/Auxilary'
import Backdrop from '../BackDrop/Backdrop'

class modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate(){
        console.log('[Modal will update]');
    }
    render(){
    return(
    <Auxillary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}    
        >
            {this.props.children}
        </div>
    </Auxillary>
   
    )
}
}
export default modal;