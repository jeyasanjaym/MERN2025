import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/about' className='link'>about</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/pages" className="nav-item">Pages</Link>
        <Link to="/pages" className="nav-item">skills</Link>
        <Link to='/hooks' className="nav-item">hooks</Link>
        
      </nav>
    </div>
  )
}

export default navbar;
