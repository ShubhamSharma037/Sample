import React from 'react';
import classes from './sideDrawer.module.css';
import ToolBar from './ToolBar/toolbar';



interface Props{
    open : boolean,
    close : ()=>void
}

const SideDrawer : React.FC<Props> = (props) =>{

    

    let cls = [classes.hamburger];

    if(props.open)
    {
        cls = [classes.hamburger,classes.change];
    }

    return(
        <React.Fragment>
            <div className={cls.join(' ')} onClick={props.close}>
                <span/>
                <span/>
                <span/>
            </div>
            <ToolBar
            close = {props.close}
            open={props.open}/>
         </React.Fragment>
    )
}


export default SideDrawer;