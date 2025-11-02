import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {

  const recipient = 'jacobmmmcguire@gmail.com';


  /*
  function scrollToTarget (targetRef){

    targetRef.scrollIntoView({

      behavior: 'smooth',
      block: 'start'

    })
    
  }
  */

  return (
    <div className = 'navbar'>

        <img src = {logo} alt = ""/>

        
        <ul className = "nav-menu" >
            {/** TODO: Add smooth scroll later */}
            <a href="#about">[About Me]</a>
            <a href="#services">[Services]</a>
            <a href="#latest-work">[Portfolio]</a>
        </ul>

        
        <a className = "nav-connect"  href={`mailto:${recipient}`}> if(enjoyPage).then(CONTACT)</a>
    
    </div>
  )
}

export default Navbar