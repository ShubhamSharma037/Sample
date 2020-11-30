import React from 'react';
import classes from './serviceContainer.module.css';
import Service from './Service/service';
import bg1 from '../../../../media/Services/service1.jpg'
import bg2 from '../../../../media/Services/service2.jpg'
import bg3 from '../../../../media/Services/service3.jpg'
import svg1 from '../../../../media/SVG/pen.svg';
import svg2 from '../../../../media/SVG/arc.svg';
import svg3 from '../../../../media/SVG/tools.svg';


const container : React.FC = () =>{
    return(
        <div className={classes.serviceContainer}>
            <Service svg={svg1} bg={bg1} id='ser1' heading="Design">
                A design is a plan or specification for the construction of an object
                or system or for the implementation of an activity or process, or the result of that plan or specification
                 in the form of a prototype, product or process.
            </Service>
            <Service svg={svg2} bg={bg2} id='ser2' heading="Architecture Support">
                Architecture, the art and technique of designing and building, 
                as distinguished from the skills associated with construction. 
            </Service>
            <Service svg={svg3} bg={bg3} id ='ser3' heading="Renovation">
                Renovation is the act of renewing or restoring something.
            </Service>
        </div>
    )
}


export default container;