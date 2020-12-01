import React, { useEffect } from 'react';
import classes from './contact.module.css';
import ContactDetails from './ContactDetails/ContactDetails';
import NeumorophismTitle from '../../UI/NeumorphismTitle/NeumorophismTitle';




const Contact : React.FC = () =>{

    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <React.Fragment>
            <NeumorophismTitle title='Contact Us'/>
            <section className={classes.Contact}>
                <ContactDetails/>
            </section>
        </React.Fragment>
    )
}

export default Contact;