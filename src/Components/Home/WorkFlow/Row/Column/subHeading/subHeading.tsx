import React from 'react';
import classes from './sub.module.css';


interface Props{
    children : string
}


const sub : React.FC<Props> = (props) =>{
    return(
        <section className={classes.sub}>
            <h1 className={classes.head}>{props.children}</h1>
        </section>
    )
}


export default sub;