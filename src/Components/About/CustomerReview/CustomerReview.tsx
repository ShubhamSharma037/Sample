import React from 'react';
import classes from './CustomerReview.module.css';
import Title from '../../../UI/Title/title';
import Carousel from './CardCarousel/CardCarousel';




const CustomerReview : React.FC = () =>{

    

    return(
        <section className={classes.CustomerContainer}>
            <Title>Our Satisfied Customers</Title>
            <div className={classes.CustomerFeeds}>
                <Carousel/>
            </div>
        </section>
    )
}


export default CustomerReview;