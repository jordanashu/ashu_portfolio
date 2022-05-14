import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    
    <div className='n-wrapper'>

<div className='n-left'>
<div className='n-name'>Ashu</div>
<Toggle/>
</div>

<div className='n-right'>

<div className='n-list'>

<ul style={{listStyleType:'none'}} >


<Link spy={true} to='Navbar' activeClass='activeClass'>
    <li>Home</li>
    </Link>
    
    <Link spy={true} to='Services' activeClass='activeClass'>
    <li>Service</li>
</Link>
    
</ul>

</div>
<Link spy={true} to='Contact' activeClass='activeClass'>
<button className='button n-button '>Contact </button>
</Link>
</div>

</div>


    


  )
}

export default Navbar