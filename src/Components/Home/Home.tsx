import React, { useEffect } from 'react';
import SlideShow from './SlideShow/slideshow';
import WorkFlow from './WorkFlow/workflow';
import Welcome from './Welcome/welcome';
import Counter from './Counter/counter';
import FeaturedProject from './FeaturedProject/FP';
import Services from './Services/services';
import AOS from 'aos';





const Home : React.FC = ()=>{


    
    useEffect(()=>{
        window.scrollTo(0,0);
        AOS.init({
            duration : 600,
            once : true
        })
    })
    
    return(
        <React.Fragment>
            <SlideShow/>
            <Welcome/>
            <WorkFlow/>
            <Counter/>
            <Services/>
            <FeaturedProject/>
        </React.Fragment>     
        
    )
}


export default Home;