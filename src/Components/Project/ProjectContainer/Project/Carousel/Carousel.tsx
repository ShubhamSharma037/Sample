import React from 'react';
import ProjectCarousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import classes from './Carousel.module.css';

type Props = {
    children : any
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
        
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        arrows : false,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const Carousel : React.FC<Props> = (props) =>{
    return(
        <React.Fragment>
            <ProjectCarousel
            removeArrowOnDeviceType={['mobile']}
            infinite
            responsive={responsive}
            containerClass={classes.CarouselContainer}
            itemClass={classes.items}
            showDots>
                {props.children}
            </ProjectCarousel>
        </React.Fragment>
       
        
    )
}


export default Carousel;