import classes from './logo.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';




const Logo : React.FC = () =>{
    return(
        <section className={classes.logo}>
            <NavLink to = '/' exact={true} className={classes.none}><h1>DpdzineS</h1></NavLink>
        </section>
    )
}


export default Logo;