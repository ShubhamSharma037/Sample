import React from 'react';
import classes from './row.module.css';
import RowItem from './RowItem/RowItem';


const Row : React.FC = () =>{
    return(
        <section className={classes.Row}>
            <RowItem heading='Mission'>
                 Our only mission is to provide our client with the best services and satisfaction.
            </RowItem>
            <RowItem heading='Vision'>
                Every project is a big one for us, we don't consider big budget as big vision.
            </RowItem>
            <RowItem heading='DpdzineS'>
                The one you should choose for your dream home or office, because it's "your dream what we design".
            </RowItem>
        </section>  
    )
}


export default Row;