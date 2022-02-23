import React from 'react';
import classes from './ProjectContainer.module.css';
import importAllImages from '../../../media/media';
import Project from './Project/Project';





const projectNames = [
     'Gurgaon, Deepak Ahlawat',
     'Gurgaon, Dr. Rakesh Chopra',
     'Homes 121, Noida, Mr. Manoj Chaudhary',
     'Lajpat Nagar, Delhi, Arun Gupta',    //
     'Loni, Vishal Nagar',
     'Mr Suresh, Ats Advantage',
     'Mr Welly',
     'Mr. Rajeev Arora',                   //
     'Mrs Anita (Gurgaon)',
     'Noida 137, Amit Yadav',               //
     'Palm Olympia, Arvind Mital',
     'Pavillion Court Noida',
     'Sarita Vihar, Manoj Basoya',
     'Saya Zenith, Dr. Neha',
     'Supertech Estate, Amit Aggarwal',
 ];

const pr1 : {[key : string] : string} =  importAllImages(require.context('../../../media/Projects/Gurgaon, Deepak Ahlawat',false,/\.(png|jpe?g|svg)$/));
const pr2 : {[key : string] : string} =  importAllImages(require.context('../../../media/Projects/Gurgaon, Dr. Rakesh Chopra',false,/\.(png|jpe?g|svg)$/));
const pr3 : {[key : string] : string} =  importAllImages(require.context('../../../media/Projects/Homes 121, Noida, Mr. Manoj Chaudhary',false,/\.(png|jpe?g|svg)$/));
const pr4 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Lajpat Nagar, Delhi, Arun Gupta',false,/\.(png|jpe?g|svg)$/));
const pr5 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Loni, Vishal Nagar',false,/\.(png|jpe?g|svg)$/));
const pr6 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Mr Suresh, Ats Advantage',false,/\.(png|jpe?g|svg)$/));
const pr7 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Mr Welly',false,/\.(png|jpe?g|svg)$/));
const pr8 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Mr. Rajeev Arora',false,/\.(png|jpe?g|svg)$/));
const pr9 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Mrs Anita (Gurgaon)',false,/\.(png|jpe?g|svg)$/));
const pr10 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Noida 137, Amit Yadav',false,/\.(png|jpe?g|svg)$/));
const pr11 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Palm Olympia, Arvind Mital',false,/\.(png|jpe?g|svg)$/));
const pr12 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Pavillion Court Noida',false,/\.(png|jpe?g|svg)$/));
const pr13 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Sarita Vihar, Manoj Basoya',false,/\.(png|jpe?g|svg)$/));
const pr14 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Saya Zenith, Dr. Neha',false,/\.(png|jpe?g|svg)$/));
const pr15 : {[key : string] : string}=  importAllImages(require.context('../../../media/Projects/Supertech Estate, Amit Aggarwal',false,/\.(png|jpe?g|svg)$/));

const projectImages = [pr1,pr2,pr3,pr4,pr5,pr6,pr7,pr8,pr9,pr10,pr11,pr12,pr13,pr14,pr15];



const ProjectContainer : React.FC =  () =>{
     
     
         
     return(
          <div className={classes.ProjectContainer}>
               {
                    projectNames.map((item,index)=>{
                         let images = projectImages[index]
                         
                       return(
                            <Project title={item} key ={index}>
                                 {
                                     images? Object.values(images).map((el,id)=><img src={el} key={id} alt="Dpdzines"/>) : 'Error'
                                 }
                            </Project>
                       )    
                    })
               }
          </div>
     )
}


export default ProjectContainer;