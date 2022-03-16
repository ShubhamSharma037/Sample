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
            <div className={classes.detailContent}>
                <img src={props.image} alt='dpdzines'/>
                <h1>
                    <a target='_blank' rel='noopener noreferrer' href={props.email?`mailto:${props.children}`:(props.link?`${props.children}`:`tel:${props.children}`)}>{props.link?'Location':props.children}</a>
                </h1>
            </div>
        </div>
    )
}


export default Email;