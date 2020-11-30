import React from 'react';
import classes from './gItem.module.css';




interface Props{
    src : string,
    dir? : boolean
}

const GItem : React.FC<Props> = (props)=>{
    return(
        <div className={classes.gItem}>
            <img src = {props.src} alt="dpdzineS"/>
        </div>
    )
}


export default GItem;