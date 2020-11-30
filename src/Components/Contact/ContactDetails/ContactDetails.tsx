import React from 'react';
import classes from './ContactDetails.module.css';
import Detail from './Detail/Detail';
import Mail from '../../../media/Footer/mail.webp';
import telephone from '../../../media/Footer/telephone.png';
import Map from '../../../media/Contact/map.png';



const ContactDetails : React.FC = () =>{
    return(
        <div className={classes.Details}>
           <Detail email image={Mail}>dpdzines@gmail.com</Detail>
           <Detail image={telephone}>+91 99xxxxx</Detail>
           <Detail link image={Map}>https://goo.gl/maps/xxaG7szeAp5ig3aD8</Detail>
        </div>
    )
}

export default ContactDetails;