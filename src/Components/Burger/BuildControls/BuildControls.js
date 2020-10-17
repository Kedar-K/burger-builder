import React from 'react'
import classes from './BuildControls.module.css'
import Controls from './Controls/Controls'

const controls=[
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}
];

const buildControls = (props) =>{
    // console.log(props.purchesables);
    return(

    <div className={classes.BuildControls} >
        <button className={classes.OrderButton} disabled={!props.purchesables}>Order Now</button>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <Controls 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingridientAdded(ctrl.type)}
            removed={() => props.ingridientDeducted(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        
    </div>
    )
}

export default buildControls