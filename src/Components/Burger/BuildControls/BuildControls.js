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
    return(
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <Controls 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingridientAdded(ctrl.type)}
            removed={() => props.ingridientDeducted(ctrl.type)} />
        ))}
    </div>
    )
}

export default buildControls