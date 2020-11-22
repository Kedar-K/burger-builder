import React, {Component} from 'react';
import  Aux from '../../HOC/Auxilary'
import classes from './Layout.module.css'
import ToolBar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer :false
    }
    sideDrawerClosedHandeller = () =>{
        this.setState({showSideDrawer: false})
    }

    sidedrawertogglehandeller = () =>{
        this.setState((prevState)=>{
        return {showSideDrawer: !this.state.showSideDrawer};
    })
    }
    render(){
        return(
            <Aux>
                <ToolBar drawertoggleclicked={this.sidedrawertogglehandeller} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandeller} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
        }
    
}

export default Layout;