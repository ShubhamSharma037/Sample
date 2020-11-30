import React from 'react';
import classes from './row.module.css';
import Column from './Column/col';
import bg1 from '../../../../media/workflow/workflow1.png';
import bg2 from '../../../../media/workflow/workflow2.webp';
import bg3 from '../../../../media/workflow/workflow3.png';



const Row : React.FC = () =>{
    return(
        <div className={classes.Row}>
            <Column 
                id = 'col1'
                src={bg1}
                sub = 'Perfectly Planned'>
                    Design is the most important entity in every interior or renovation work. 
                    Our team not only makes the design perfect but also consider the client's requirements.
            </Column>
            
            <Column 
                id ='col2'
                src={bg2}
                sub = 'Carefully Design'>
                   We planned projects steadily and carefully, to make it happen on time and in budget.
            </Column>
            
            <Column 
                id = 'col3'
                src={bg3}
                sub = 'Smartly Execute'>
                   We prefer smart execution over traditional ways. 
                   This not only helps in time-saving but also done the work with perfection.
            </Column>
            
        </div>
    )
}


export default Row;