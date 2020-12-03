import React from 'react';
import classes from './Project.module.css';
import Styled from 'styled-components';
import Carousel from './Carousel/Carousel';



type Props = {
    children : any
}

const Title = Styled.div`
    text-align : left;
    width : 60%;
    font-size : 25px;
    font-family : -apple-system-caption1;
    border-bottom : 1px solid #8377D1;
    line-height : 40px;

    @media(max-width:600px){
        font-size : 20px;
    }
`; 
  

const Project : React.FC<Props> = (props) =>{
    return(
        <div className={classes.Project} data-aos='fade-up' data-aos-duration="400">
            <Title>Project Name</Title>
            <Carousel>{props.children}</Carousel>
        </div>
    )
}


export default Project;