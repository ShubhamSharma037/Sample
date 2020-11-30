import React from 'react';
import classes from './aboutIntro.module.css';
import AboutText from './AboutIntroText/AboutText';
import Pic from './AboutPic/Pic';
import src from '../../../media/homeSlider/home1.jpg';



const AboutIntro : React.FC = () =>{
    return(
        <section className={classes.aboutIntroBody}>
            <Pic src={src}/>
            <AboutText/>
        </section>
    )
}


export default AboutIntro;