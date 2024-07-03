import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          Fitness and Health
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/diet-tracker')}>Home</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/sign-up')}>Sign Up</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/sign-in')}>Sign In</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;