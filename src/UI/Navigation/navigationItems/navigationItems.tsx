import React from 'react';
import classes from './navigationItems.module.css';
import NavItem from './navigationItem/navigationItem';




 const NavLinks : React.FC = () =>{

   

    
     return(
        <div className = {classes.Links}>
            <ul className={classes.navitemBar}>
                <NavItem link='/' exact>Home</NavItem>
                <NavItem link='/about' >About Us</NavItem>
                <NavItem link='/projects'>Projects</NavItem>
                <NavItem link='/contact'>Contact Us</NavItem>
            </ul>   
        </div>
     )
 }



 export default NavLinks;