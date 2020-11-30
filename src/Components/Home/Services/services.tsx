import React from 'react';
import Body from '../../../UI/ComponentBodyLayout/body';
import Title from '../../../UI/Title/title';
import ServiceContainer from './ServiceContainer/serviceContainer'

const services : React.FC = () =>{
    return(
        <Body>
            <Title>Our Services</Title>
            <ServiceContainer/>
        </Body>
    )
}


export default services;