import classes from './subCon.module.css';
import React from 'react';


interface Props{
    content : string 
}

const subCon : React.FC<Props> = (props)=>{
    return(
        <section className={classes.con}>
            <p className={classes.body}>
                {props.content}
            </p>
        </section>
    )
}


export default subCon;