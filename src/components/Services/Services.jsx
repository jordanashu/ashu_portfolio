import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

import Card from "../../components/Card/Card";
import { themeContext } from '../../Context';
import { useContext } from 'react';


import {motion} from 'framer-motion'

const Services = () => {

  const transition ={duration:1,type:'spring'}
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;


  return (
    <div className='services' id="Services"> 
    
    {/* left side */ }

    <div className='awesome'>
<span>My Skills and Certification Courses </span>
<span></span>
<spane  style={{color:darkMode? 'white':''}}>I am provide multiple services for the user </spane>


<div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
 </div>
    
{/*  right side  */}



    <div className='cards' >
   
    <motion.div
    whileInView={{left:'18rem'}}
    initial={{left:'25rem'}}
    transition={transition}

    
     style={{left:'14rem'}}>
<Card 
         emoji={HeartEmoji}
       heading={"Development"}
        detail={"Html,Tailwindcss, Bootstrap, JavaScript, ReactJs ,Nodejs"}
 />
      </motion.div> 
      

{/* Second card */}
  

<motion.div 
 whileInView={{left:'-3rem'}}
    initial={{left:'25rem'}}
    transition={transition}


 style={{top:'12rem',left:'-4rem'}}>
<Card 
         emoji={Glasses}
       heading={"Certificate"}
        detail={"O Level,Data Analyst With Python ,TCS Ion Career Edge"}
 />
      </motion.div> 




      <motion.div 
      whileInView={{left:'14rem'}}
    initial={{left:'25rem'}}
    transition={transition}
      
      
      style={{top:'18rem',left:'12rem'}}>
<Card 
         emoji={Humble}
       heading={"Projects"}
        detail={" Guess my number (JavaScript) , E-commerce(php) , Portfolio(Reactjs)"}
 />
      </motion.div> 














      <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

      <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>

    </div>




    </div>
  )
}

export default Services