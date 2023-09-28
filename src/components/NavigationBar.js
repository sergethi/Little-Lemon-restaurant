import React from 'react';
import logo from '../images/Logo-v1.png';
import './NavigationBar.css'
import { Link } from 'react-router-dom';

function NavigationBar() {
  const handleClick = (anchor) => () => {
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
        <div className='logo-container'>
            <img src={logo} alt='logo'/>
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/#about' onClick={handleClick("about")}>About</Link></li>
            <li><Link to='/#menu'onClick={handleClick("menu")}>Menu</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            <li><Link to='/order-online'>Order online</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>
  )
}

export default NavigationBar