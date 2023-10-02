import React, { useState } from 'react';
import logo from '../images/Logo-v1.png';
import './NavigationBar.css'
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

   // Function to close the nav
   const closeNav = () => {
    setIsOpen(false);
  };
  const handleClick = (anchor) => () => {
    closeNav()
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav>
        <div className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
          &#9776; {/* This is the HTML entity for the hamburger icon */}
        </div>
        <div className='logo-container'>
            <Link to='/'><img src={logo} alt='logo'/></Link>
        </div>
        <ul className={isOpen && "nav-list active"}>
            <li><Link to='/' onClick={closeNav}>Home</Link></li>
            <li><Link to='/#about' onClick={handleClick("about")} >About</Link></li>
            <li><Link to='/#menu'onClick={handleClick("menu")}>Menu</Link></li>
            <li><Link to='/booking' onClick={closeNav}>Reservations</Link></li>
            <li><Link to='/order-online' onClick={closeNav}>Order online</Link></li>
            <li><Link to='/login' onClick={closeNav}>Login</Link></li>
        </ul>
    </nav>
  )
}

export default NavigationBar