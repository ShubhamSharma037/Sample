import classes from './title.module.css';
import React from 'react';

interface Props{
    children : string
}

const title : React.FC<Props> = (props) =>{
    return(
        <div className={classes.title} >
            <h1 className={classes.heading}>{props.children}</h1>
        </div>
    )
}


export default title;