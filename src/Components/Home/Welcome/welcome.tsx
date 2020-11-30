import React from 'react';
import Body from '../../../UI/ComponentBodyLayout/body';
import img from '../../../media/intro/bg_1.jpg';
import Image from './Image/image';
import IntroText from './IntroText/intro';
import Title from '../../../UI/Title/title';



const body = ()=>{
    return(

            <Body>
                <Title>Hello & Welcome</Title>
                <Image src={img}/>
                <IntroText/>
            </Body>

    )
}



export default body;