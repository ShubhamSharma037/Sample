import React from 'react';
import classes from './gallery.module.css';
import GalleryRow from './GalleryItems/galleryItems';





interface Props{
    dir? : boolean;
    idNo : number;
}




const Gallery : React.FC<Props> = (props) =>{
    
    // const Pics : string[] =[]


    return(
        <div className={classes.gallery} id={`gallery${props.idNo}`}>
            <GalleryRow dir={props.dir}/>
        </div>
    )
}


export default Gallery;