import React from 'react';
import classes from './slideshow.module.css';
import Image  from './Slides/slide';
import Home1 from '../../../media/homeSlider/home1.jpg';
import Home2 from '../../../media/homeSlider/home2.jpg';
import Home3 from '../../../media/homeSlider/home3.jpg';
import Home4 from '../../../media/homeSlider/home4.jpg';
// import Home5 from '../../../media/homeSlider/home5.jpg';
// import Home6 from '../../../media/homeSlider/home6.jpg';
// import Home7 from '../../../media/homeSlider/home7.jpg';
// import Home8 from '../../../media/homeSlider/home8.jpg';





const slideShow  = ()=>{

    return(
        <div className={classes.slideShowContainer}>
            <div className={classes.overlay}>
                <div className={classes.textOnLeft}>
                    <h1 className={classes.fadeUp}>W</h1>
                    <h3 className={classes.fadeLeft}>elcome</h3><br/>
                    <h3 className={classes.flipY}>To</h3><br/>
                    <h3 className={classes.zoomOut}>Dpdzines</h3>
                </div>
            </div>
            <div className={[classes.slides,classes.slide].join(' ')}>
                <Image 
                    src = {Home1}
                     />
                <Image 
                    src = {Home2}
                    />
                <Image 
                    src = {Home3}
                    />
                <Image 
                    src = {Home4}
                    />
            </div>    
        </div>
    )
}



export default slideShow;