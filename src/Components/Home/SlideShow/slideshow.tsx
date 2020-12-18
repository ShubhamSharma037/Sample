import React, { useEffect } from 'react';
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



const cloneBackground = () =>{
    let cloneItem : HTMLElement = document.getElementById('slider') as HTMLElement;
    let backgroundSlider : HTMLElement = cloneItem.cloneNode(true) as HTMLElement;
    backgroundSlider.classList.remove(`${classes.slideShowContainer}`);
    backgroundSlider.classList.add(`${classes.clone}`);

    document.getElementById('sliderContainer')?.appendChild(backgroundSlider);
}



const SlideShow  = ()=>{

    useEffect(()=>{
        cloneBackground();
    },[])

    

    
    return(
        <div className={classes.container} id='sliderContainer'>
           
        <div className={classes.slideShowContainer} id='slider'>
           
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
    </div>
    )
}



export default SlideShow;