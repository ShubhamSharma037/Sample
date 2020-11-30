import React from 'react';
import classes from './Layout.module.css';
import Navigation from '../Navigation/navigation';
import Footer from '../Footer/footer';

interface Props{
    children : any
}


const Layout : React.FC<Props> = (props) =>{
    return(
        <React.Fragment>
            <Navigation/>
            <main className={classes.container}>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>
    )
}



export default Layout;