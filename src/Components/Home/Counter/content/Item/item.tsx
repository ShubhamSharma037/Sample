import classes from './item.module.css';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



interface Props{
    end : string,
    children : string,
    suffix? : any
}



const Item : React.FC<Props> = (props) =>{

    

    return(
        <div className={classes.item}>
            
            
            <CountUp 
                start={0}
                end = {Number(props.end)} 
                suffix={props.suffix}
                duration = {4}
                separator = ','
                >
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className={classes.itemCounter} ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            <h3>{props.children}</h3>
        </div>
    )
}


export default Item;