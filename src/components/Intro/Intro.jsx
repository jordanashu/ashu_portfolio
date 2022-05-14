import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';

import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Resume from './resume.pdf'
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from 'framer-motion'



function Intro() {


    const transition ={duration:2,type:'spring'}

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

  return ( 
    <div className='intro'>
    
    <div className='i-left'>
<div className='i-name'>
<span style={{color:darkMode? 'white':''}}>👋Hi ! I Am</span>
<span>Ashutosh Kumar Singh</span>
<span>I Am Mern Stack Developer
 building Web 
application with
 inovative ideas to solve real life problems. </span>

</div>
<a href={Resume} download>
<button className='button i-button'>Download CV</button>
</a>

<div className='i-icons'>
<a href='https://github.com/jordanashu'><img src={Github} alt=""/></a>
<a href='https://www.linkedin.com/in/jordanashu/'><img src={LinkedIn} alt=""/></a>

</div>



</div>






    <div className='i-right' >
<img src={Vector1} alt=""/>
<img src={Vector2} alt=""/>
<img src={boy} alt=""/>
<motion.img 
initial={{left:'-36%'}}
whileInView={{left:'-24%'}}
transition={transition}
src={glassesimoji}
alt=""/>
<motion.div 
initial={{top:'-4',left:'84%'}}
whileInView={{left:'68%'}}
transition={transition}

style={{top:'-4%',left:'68%' }}
className='floating-div'
>
    <FloatingDiv image={Crown} txt1='Web'  txt2='Developer'/>
</motion.div>


<motion.div
initial={{left:'9rem',top:'23rem'}}
whileInView={{left:'0rem'}}
transition={transition}


 style={{top:'23rem',left:'2rem'}}
 className='floating-div'>
    <FloatingDiv image={thumbup} txt1='Mern Stack ' txt2='Developer'/>
</motion.div>

{/* blur divs  */}

<div className='blur' style={{background:"rgb(238 210 255)"}}>

</div>

<div className='blur' style={{background:'#C1F5FF', top:'17rem',
width:'21rem',
height:'11rem',

left:'-9rem'
}}>

</div>

    
    
     </div>
      </div>
  )
}

export default Intro