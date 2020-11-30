import React from 'react';
import classes from './Detail.module.css';

type Props ={
    email? : boolean
    link? : boolean
    image : string,
    children : string,
}

const Email : React.FC<Props> = (props) =>{
    return(
        <div className={classes.detail}>
           <img src={props.image} height='80px'/>
           <h1>
               <a target='_blank' href={props.email?`mailto:${props.children}`:(props.link?`${props.children}`:`tel:${props.children}`)}>{props.children}</a>
           </h1>
        </div>
    )
}


export default Email;