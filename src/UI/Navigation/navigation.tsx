import React, { useState } from 'react';
import Logo from './Logo/logo';
import NavItems from './navigationItems/navigationItems';
import DrawerToggle from './SideDrawer/sideDrawer'
import classes from './navigation.module.css';





const navbarColorHandler = () =>{
    const navbar = document.querySelector(`.${classes.navbar}`) as HTMLElement;
    
    if(window.pageYOffset > 700){
        navbar.classList.add(`${classes.background}`); 
    }
    else if(window.pageYOffset===0){
        navbar.classList.remove(`${classes.background}`)
    }
}


window.onscroll = navbarColorHandler
    


const Nav : React.FC = ()=>{


    const [state, setState] = useState({show : false});


    const ToolBarHandler = () =>{
        setState({
            show : !state.show
        })
    }

    return(
        <header className={classes.navbar}>
            <DrawerToggle 
                open = {state.show}
                close={ToolBarHandler}/>
            

            <Logo/>
             <nav className={classes.DesktopOnly}>
                <NavItems/>
            </nav>
        </header>
       
    )
}


export default Nav;