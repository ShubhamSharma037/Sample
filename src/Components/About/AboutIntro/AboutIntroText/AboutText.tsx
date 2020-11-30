import React from 'react';
import Styled from 'styled-components';
import classes from './AboutTextContainer.module.css';





const Title = Styled.div`
    width : 100%;
    height : auto;
    // border : 1px solid #8377D1;
    margin : 20px auto;
`;


const AboutText : React.FC = () =>{
    return(
        <div className={classes.aboutText}>
            <Title>
                <h1 className={classes.heading}>About Us</h1>
            </Title>
            <div className={classes.txt}>
                <p>
                    DpdzineS, an Interior Designing and Decoration firm serves their client in multiple sectors. 
                    We are specialized in Interior Design and services.
                    DpdzineS is known for its ability to provide innovative solutions that cater to a client’s requirements, tastes and budget. 
                    Our team of interior designers prepares custom tailored packages and provides entire project management support from procurement and budget management to design and execution.
                </p>
            </div>
        </div>
    )
}


export default AboutText;