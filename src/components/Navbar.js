import React,{useState} from 'react'
import Hamburger from 'hamburger-react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.avif'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
    <Hamburger className='bar' color={isOpen?'black':'white'} size={25} toggled={isOpen} toggle={setOpen} /></label>
        <ul>
            <li><Link>Add restaurant</Link></li>
            <li><Link>Log in</Link></li>
            <li><Link>Sign up</Link></li>
        </ul>
    </nav>
    <div className="main">    
         <span className='coman span1'><img src={Logo} alt="Zomato Logo" /></span>
         <span className='coman span2'>Find the best restaurants, cafés</span> 
         <span className='coman span2'>and bars in India</span>
    </div>
    </>
  )
}
