import React from 'react';
import classes from './footer.module.css';
import Mail from '../../media/Footer/mail.webp';
import telephone from '../../media/Footer/telephone.png';


const Footer : React.FC = () =>{
    return(
        <footer className={classes.footer}>
            <div className={classes.FooterContent}>
                <h1>DpdzineS</h1>
                <div className={classes.contact}>
                    <section id={classes.mail}>
                        <img src={Mail} alt='dpdzines'/>
                        <h4><a href="mailto:">shubhamsharma616.ss@gmail.com</a></h4>
                    </section>

                    <section id={classes.tel}>
                        <img src={telephone} alt='dpdzines'/>
                        <h4><a href="tel:">7982115283</a></h4>
                    </section>
                </div>
            </div>
        </footer>
    )
}



export default Footer;