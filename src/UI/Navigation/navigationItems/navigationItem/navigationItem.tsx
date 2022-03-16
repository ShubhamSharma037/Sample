import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navigationItem.module.css';


interface Props{
    children : string,
    exact? : boolean
    link : string
}

const NavItem : React.FC<Props> = (props) => {

    
    return(
        <li className={classes.item}>
            <NavLink to = {props.link} exact={props.exact} activeClassName={classes.active} className={classes.navitem}>{props.children}</NavLink>
        </li> 
)
}



export  default NavItem;