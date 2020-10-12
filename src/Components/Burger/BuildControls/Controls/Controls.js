import React from 'react'
import classes from './Controls.module.css'

const controls =(props) =>{
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    )
}

export default controls;