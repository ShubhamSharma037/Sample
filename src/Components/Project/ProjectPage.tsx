import React, { useEffect } from 'react';
import classes from './Project.module.css';
import NeumorophismTitle from '../../UI/NeumorphismTitle/NeumorophismTitle'
import ProjectContainer from './ProjectContainer/ProjectContainer';


const Project : React.FC = () =>{

    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <div className={classes.Project}>
            <NeumorophismTitle title='Projects'/>
            <ProjectContainer/>
        </div>
    )
}


export default Project;