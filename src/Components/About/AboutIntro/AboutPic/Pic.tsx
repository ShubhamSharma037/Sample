import React from 'react';
import classes from './Pic.module.css';


type Props={
    src : string
}


const Pic : React.FC<Props> = (props) =>{
    return(
        <div className={classes.pic}>
            <img src={props.src} alt='dpdzineS'/>
        </div>
    )
}


export default Pic;