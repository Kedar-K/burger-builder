import React from 'react'
import Logo from '../../LOGO/logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/BackDrop/Backdrop'
import Auxillary from '../../../HOC/Auxilary'

const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <Auxillary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                <Logo />
                </div>
                <nav><NavigationItems /></nav>
            </div>
        </Auxillary>
    );
}

export default sideDrawer;