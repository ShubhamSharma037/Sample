import React from 'react';
import SlideShow from './SlideShow/slideshow';
import WorkFlow from './WorkFlow/workflow';
import Welcome from './Welcome/welcome';
import Counter from './Counter/counter';
import FeaturedProject from './FeaturedProject/FP';
import Services from './Services/services';





 


const Home : React.FC = ()=>{


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