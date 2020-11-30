import React, { useEffect } from 'react';
import classes from './service.module.css';



interface Props{
    heading : string
    bg : string,
    id : string,
    children : string,
    svg : string
}



const Service : React.FC<Props> = (props) =>{
 
    let aos : string;
    let delay : number;
    
    useEffect(()=>{
        const overlay = document.querySelector(`#${props.id}`) as HTMLElement;
        overlay.style.backgroundImage = `url(${props.bg})`;
    },[props])

    if(props.id==='ser1'){
        aos = 'fade-right';
        delay = 0;
    }
    else if(props.id==='ser2'){
        aos = 'zoom-in';
        delay = 200;
    }
    else{
        aos='fade-left';
        delay = 0;
    }

    
    

    return(
        <div className={[classes.service, classes.MobileOnly].join(' ')} data-aos={aos}  data-aos-delay={delay} >
            
            <div className={classes.content}>
                <img alt='dpdzines' src = {props.svg} />
                <h1>{props.heading}</h1>
            </div>
            
            <div className={classes.overlay} id={props.id}>
                <section className={classes.ser_con}>
                    <p>{props.children}</p>
                </section>
            </div>
            
        </div>
    )
}


export default Service;