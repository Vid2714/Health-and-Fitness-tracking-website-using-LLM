import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">  
        <div className="navbar-logo" onClick={() => navigate('/')}>Fitness and Health</div>
        <div className="navbar-links">
        <ul className="nav-menu">
        <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/workout-planner')}>Planner</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/diet-tracker')}>Diet</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/sign-up')}>Sign Up</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/sign-in')}>Sign In</div>
          </li>
        </ul>   
        </div>   
    </div>
  );
};

export default Navbar;