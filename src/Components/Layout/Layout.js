import React from 'react';
import  Aux from '../../HOC/Auxilary'
import classes from './Layout.module.css'
import ToolBar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) =>{
    return(
        <Aux>
            <ToolBar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;