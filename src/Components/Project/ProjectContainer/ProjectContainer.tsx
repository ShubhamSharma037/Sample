import React from 'react';
import classes from './ProjectContainer.module.css';
import Project from './Project/Project';
import pic from '../../../media/counter/counter_bg.webp';
import pic2 from '../../../media/homeSlider/home1.jpg';

const ProjectContainer : React.FC =  () =>{
    return(
        <div className={classes.ProjectContainer}>
           <Project>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic2} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
           </Project>
           <Project>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
           </Project>
           <Project>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
           </Project>
           <Project>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
           </Project>
           <Project>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
                <img src={pic} alt="DpdzineS"/>
           </Project>
           
        </div>

    )
}


export default ProjectContainer;