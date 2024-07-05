import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">  
        <div className="navbar-logo" onClick={() => navigate('/home-page')}>FitTrack</div>
        <div className="navbar-links">
        <ul className="nav-menu">
        <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/chatbot')}>Chatbot</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/workout-planner')}>Planner</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/diet-tracker')}>Diet</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/sign-up')}>Login</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => navigate('/user-profile')}>Profile</div>
          </li>
        </ul>   
        </div>   
    </div>
  );
};

export default Navbar;