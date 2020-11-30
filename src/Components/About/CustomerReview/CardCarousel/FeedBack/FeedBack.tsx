import React from 'react';
import Styled from 'styled-components';
import classes from './FeedBack.module.css';


type Props = {
    children : string,
    customer  : string
}

const Customer = Styled.h2`
    color : #000;
    text-align : left;
    line-height : 30px;
    font-size : 1.2em;
    font-weight : 500;
    font-family: 'Roboto Slab', serif;
    // border : 1px solid red;

    @media(max-width : 600px){
        font-size : 15px;
    }
    
`;



const FeedBack : React.FC<Props> = (props) =>{
    return(
        <React.Fragment>
            <Customer>{props.customer}</Customer>
            <div className={classes.Feed}>
                <p>{props.children}</p>
            </div>
        </React.Fragment>
        
    )
}


export default FeedBack;