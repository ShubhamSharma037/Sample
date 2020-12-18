import React, { useEffect } from 'react';
import classes from './gItems.module.css';
import FeaturedProjectsPic from '../GalleryItem/gItem';
import img1 from '../../../../../media/Services/service1.jpg';
import img2 from '../../../../../media/Services/service2.jpg';
import img3 from '../../../../../media/Services/service3.jpg';
import img4 from '../../../../../media/intro/bg_1.jpg';
import img5 from '../../../../../media/homeSlider/home5.jpg';


interface Props{
    dir? : boolean
}

const cloneRow = (props : Props) =>{
    let cloningItem : HTMLElement = document.getElementById('galleryRow') as HTMLElement;
    let clonedRow : HTMLElement = cloningItem.cloneNode(true) as HTMLElement;

    if(props.dir){
        document.getElementById(`gallery2`)?.appendChild(clonedRow).classList.remove(`${classes.slider2}`);
        document.getElementById(`gallery2`)?.appendChild(clonedRow).classList.add(`${classes.slider1}`);
    }
    else{
        document.getElementById(`gallery1`)?.appendChild(clonedRow);

    }
}



const GItems : React.FC<Props> = (props)=>{

    useEffect(()=>{
        
        cloneRow(props);
        console.log(props.dir)
         
    },[props])
    
    let cls = [classes.row];

    if(props.dir){
        cls.push(`${classes.slider1}`);
    }

    else{
        cls.push(`${classes.slider2}`);
    }

    return(
        <div className={cls.join(' ')} id='galleryRow'>
                <FeaturedProjectsPic src={img1}/>
                <FeaturedProjectsPic src={img2}/>
                <FeaturedProjectsPic src={img3}/>
                <FeaturedProjectsPic src={img4}/>
                <FeaturedProjectsPic src={img5}/>
        </div>
    )
}


export default GItems;