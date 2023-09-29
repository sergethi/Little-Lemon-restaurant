import React from 'react';
import "./ComingSoon.css";
import { Link } from 'react-router-dom';

function ComingSoon({pageName}) {
  return (
    <div className='comingSoon-main-container'>
        <p>Stay tuned!</p>
        <p>Our {pageName} page will be available soon!</p>
        <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ComingSoon