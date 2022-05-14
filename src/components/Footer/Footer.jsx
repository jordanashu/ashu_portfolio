import React from 'react'
import './Footer.css'

import Github from '@iconscout/react-unicons/icons/uil-github'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className='footer'>
<img src={Wave} alt="" style={{width:'100%'}}/>
<div className='f-content'>

<span>ashutosh91528@hotmail.com</span>
<div className='f-icons'>
<a href='https://github.com/jordanashu'><Github color='white' size='3rem'/></a>
<a href='https://www.instagram.com/jordan_ashu_/'><Instagram color='white' size='3rem'/></a>
<a href='https://m.facebook.com/100004338395799/'><Facebook color='white' size='3rem'/></a>
</div>

</div>


    </div>
  )
}

export default Footer