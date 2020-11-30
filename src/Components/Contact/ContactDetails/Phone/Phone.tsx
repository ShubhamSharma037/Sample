import React from 'react';
import classes from './Phone.module.css';
import telephone from '../../../../media/Footer/telephone.png';





const Phone : React.FC = () =>{
    return(
        <div className={classes.Phone}>
            <img src={telephone} height='100px'></img>
        </div>
    )
}


export default Phone;