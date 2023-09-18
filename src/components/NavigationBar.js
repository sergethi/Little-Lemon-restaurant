import React from 'react';
import logo from '../images/Logo-v1.png';
import './NavigationBar.css'

function NavigationBar() {
  return (
    <nav>
        <div className='logo-container'>
            <img src={logo} alt=''/>
        </div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/booking'>Reservations</a></li>
            <li><a href='/order-online'>Order online</a></li>
            <li><a href='/login'>Login</a></li>
        </ul>
    </nav>
  )
}

export default NavigationBar