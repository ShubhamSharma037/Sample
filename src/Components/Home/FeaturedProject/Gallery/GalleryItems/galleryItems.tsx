import React from 'react';
import classes from './gItems.module.css';
import FeaturedProjectsPic from '../GalleryItem/gItem';
import img1 from '../../../../../media/Services/service1.jpg';
import img2 from '../../../../../media/Services/service2.jpg';
import img3 from '../../../../../media/Services/service3.jpg';
import img4 from '../../../../../media/intro/bg_1.jpg';
import img5 from '../../../../../media/homeSlider/home1.jpg';


interface Props{
    dir? : boolean
}

const gItems : React.FC<Props> = (props)=>{
    return(
        <div className={[classes.row,(props.dir?classes.slider1:classes.slider2)].join(' ')}>
                <FeaturedProjectsPic src={img1}/>
                <FeaturedProjectsPic src={img2}/>
                <FeaturedProjectsPic src={img3}/>
                <FeaturedProjectsPic src={img4}/>
                <FeaturedProjectsPic src={img5}/>
        </div>
    )
}


export default gItems;