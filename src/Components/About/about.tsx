import React, { useEffect } from 'react';
import NeumorophismTitle from '../../UI/NeumorphismTitle/NeumorophismTitle';
import AboutIntro from './AboutIntro/AboutIntro';
import Row from './Row/row';
import Counter from '../Home/Counter/counter';
import CustomerReview from './CustomerReview/CustomerReview';




const About : React.FC = () =>{

    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <React.Fragment>
            <NeumorophismTitle title='About Us'/>
            <AboutIntro/>
            <Row/>
            <Counter/>
            <CustomerReview/>
        </React.Fragment>
        
        
    )
}



export default About;