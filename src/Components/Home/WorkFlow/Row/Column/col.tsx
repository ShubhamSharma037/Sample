import React, { useEffect } from 'react';
import classes from './col.module.css';
import Sub from './subHeading/subHeading'
import SubContent from './subContent/subCon';

interface Props{

    src : string,
    sub : string,
    id : string,
    children : string
}


const Col : React.FC<Props> = (props)=>{

    let delay : number;
    useEffect(()=>{
        let bg = document.querySelector(`#${props.id}`) as HTMLElement;
        bg.style.backgroundImage = `url(${props.src})`;
    },[props])

    if(props.id==='col1'){
        delay =0;
    }
    else if(props.id==='col2'){
        delay = 200;
    }

    else{
        delay = 400;
    }

    return(
        <div className={classes.col} id={props.id} data-aos='zoom-in' data-aos-delay={delay}>
            <Sub>{props.sub}</Sub>
            <SubContent content={props.children}/>
        </div>
    )
}


export default Col;