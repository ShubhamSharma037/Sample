import React from 'react';
import classes from './image.module.css';


interface Props{
    src : string
}

const image : React.FC<Props>  = (props) =>{
    return(
        <React.Fragment>
            {/* <div  className={}/> */}
            <div data-aos='fade-up' className={classes.welcomeImage}>
                <img alt='Dpdzines' src = { props.src}/>
            </div>
        </React.Fragment>
    )
}

export default image;