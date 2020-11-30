import React from 'react';
import classes from './content.module.css';
import Item from './Item/item'



const content : React.FC = () =>{
    return(
        <div className={classes.content}>
            <Item end='8'>Years of Experience</Item>
            <Item end='50' suffix='+'>Happy Clients</Item>
            <Item end='64' suffix='+'>Finished Projects</Item>
            {/* <Item end='64' suffix='+'>Finished Projects</Item> */}
        </div>
    )
}


export default content;