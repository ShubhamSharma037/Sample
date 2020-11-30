import React from 'react';
import classes from './counter.module.css';
import Content from './content/content';


const counter : React.FC =() => {
    return(
        <div className = {classes.counter}>
            <Content/>
        </div>
    )
}


export default counter;