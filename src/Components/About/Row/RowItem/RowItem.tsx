import React from 'react';
import classes from './item.module.css';



type Props = {
    heading : string,
    children : string
}


const RowItem : React.FC<Props> = (props) =>{
    return(
        <div className={classes.item}>
            <div className={classes.header}>
                <h1>{props.heading}</h1>
            </div>
            <div className={classes.content}>
                <p>{props.children}</p>
            </div>
        </div>
    )
}


export default RowItem;