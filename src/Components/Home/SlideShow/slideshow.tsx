import React, { useEffect } from 'react';
import classes from './slideshow.module.css';
import Image  from './Slides/slide';
import  importAllImages  from '../../../media/media';

const images = importAllImages(require.context('../../../media/homeSlider',false,/\.(png|jpe?g|svg)$/))






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
                {
                    Object.keys(images).map((image : any)=>(<Image 
                        key = {image}
                        src = {images[image]}
                         />))
                }
            </div>    
        </div>
    </div>
    )
}



export default SlideShow;