import React from 'react';
import NavigationItems from '../../navigationItems/navigationItems'
import classes from './toolbar.module.css';


interface Props{
    close : ()=>void;
    open : boolean
}





const Toolbar : React.FC<Props> = (props) =>{


    let attachedClasses = [classes.toolbar, classes.Close];
    let cls = [classes.overlay,classes.Close]
    
    if(props.open){
        attachedClasses = [classes.toolbar,classes.Open]
        cls = [classes.overlay, classes.Open]
    }

    return( 
        <React.Fragment>
            <div className={cls.join(' ')} onClick={props.close}></div>
            <div className={attachedClasses.join(' ')}>
                <NavigationItems/>
            </div>
        </React.Fragment>
        
    )
}


export default Toolbar;