import React from 'react';
import classes from './CardCarousel.module.css';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import FeedBack from './FeedBack/FeedBack';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


 type Customer = {
     name : string,
     feed : string
 }

 

const CardCarousel : React.FC = () =>{
    
    return(
        <Carousel
        arrows={false}
        showDots
        infinite
        swipeable
        draggable
        responsive={responsive}
        containerClass={classes.carousel}
        itemClass={classes.card}
        >
            
            <FeedBack customer='Abhinav Siddharth'>
                We remodeled our entire house, and for that we got in touch with Sunny, the owner.
                We were pleased that we finalized Dpdzines as our architects. 
                Sunny is very open in regards to costs and ideas. 
                We were very surprised that our whole remodeling was not only done within the budget but on the said timeline. 
                Also, Sunny is very friendly and there were no hidden costs in his proposals. 
                He is very approachable and friendly and we are glad that we gave our contract to him, and whenever there is a work needed to be done, he is the first person we contact.
            </FeedBack>
            <FeedBack customer='Gaurav Kumar'>
                Excellent and quality work , at a very reasonable price . What they say they deliver. 
                Team is very much efficient with time bound . Have patience for your dream home. 
                The best part never get irritated although i have done no. Of modifications during my interior work.
            </FeedBack>
            <FeedBack customer='Kritika Bhardwaj'>
                It was a great experience working with DpdzineS , 
                all the team members are experienced and excellent at their work. I faced no issue working with them .
            </FeedBack>
            <FeedBack customer='Divya Thaman'>
               Nice Service
            </FeedBack>
            <FeedBack customer='Ravi'>
                Excellent work, on budget and done within given the timeline.
            </FeedBack>
            <FeedBack customer='Saurabh'>
                Best architect firm I've ever worked with.
            </FeedBack>
        </Carousel>
    )
}


export default CardCarousel;