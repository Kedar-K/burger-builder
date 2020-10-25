import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../LOGO/logo'

const toolbar = (props) =>{
    return(
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    )
}

export default toolbar