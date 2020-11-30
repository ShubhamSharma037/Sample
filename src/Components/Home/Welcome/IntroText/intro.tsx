import classes from './intro.module.css';
import React from 'react';



const intro : React.FC = () =>{
    return(
        <div className={classes.introText}>
            <p data-aos='fade-up' className={classes.text}>DpdzineS, an Interior Designing and Decoration firm serves their client in multiple sectors. 
                We are specialized in Interior Design and services.
                DpdzineS is known for its ability to provide innovative solutions that cater to a client’s requirements, tastes and budget. 
                Our team of interior designers prepares custom tailored packages and provides entire project management support from procurement and budget management to design and execution.
            </p>
        </div>
    )
}


export default intro;