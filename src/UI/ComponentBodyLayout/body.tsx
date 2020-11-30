import React from 'react';
import classes from './body.module.css';

type Props ={
    children? : React.ReactNode
}


const body : React.FC<Props> = (props) =>{
    return(
        <div className = {classes.body} >
            {props.children}
        </div>
    )
}


export default body;