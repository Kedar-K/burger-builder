import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../LOGO/logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) =>{
    return(
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar