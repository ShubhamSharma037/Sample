import React from 'react';
import styled from 'styled-components';



const Section  = styled.section`
    height : 300px;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-wrap : wrap;
    margin-top : 100px;
    box-shadow : inset -2px -2px 6px #ccc,
                 inset 2px 2px 4px #ccc;
    @media(max-width : 600px){
        height : 150px;
    }
`;

const Title = styled.h1`
    text-shadow : -2px -2px 2px #fff,
    -2px -2px 6px #ccc;
    font-size : 10em;
    color : #fff;

    @media(max-width : 600px){
        font-size : 4.2em;
    }
`;

type Props = {
    title : string
}



const NeumorophismTitle : React.FC<Props> = (props) =>{

    return(
        <Section>
                <Title>{props.title}</Title>
        </Section>
    )   
}

export default NeumorophismTitle;