import React from 'react';
import classes from './slide.module.css';

interface Props{
    src : string,
}


const Img : React.FC<Props> = (props)=>{
    return(
        <React.Fragment>
            <div className={classes.ImgWrapper}>
                <img  alt='dpdzines' src={props.src}/>
            </div>

        </React.Fragment>
    )
}


export default Img;