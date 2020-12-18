import React from 'react';
import Body from '../../../UI/ComponentBodyLayout/body';
import Title from '../../../UI/Title/title';
import classes from './FP.module.css';
import Gallery from './Gallery/gallery';




const FP : React.FC = () =>{


    return(
        <Body>
            <Title>Featured Projects</Title>
            <div className={classes.project}>
               <Gallery idNo = {1}/>
               <Gallery dir idNo={2}/>
            </div>
        </Body>
    )
}


export default FP;