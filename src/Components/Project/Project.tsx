import React from 'react';
import classes from './Project.module.css';
import NeumorophismTitle from '../../UI/NeumorphismTitle/NeumorophismTitle'



const Project : React.FC = () =>{
    return(
        <div className={classes.Project}>
            <NeumorophismTitle title='Projects'/>
        </div>
    )
}


export default Project;