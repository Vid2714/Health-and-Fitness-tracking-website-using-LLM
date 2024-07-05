import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import DietTracker from './components/DietTracker';
import WorkoutPlanner from './components/WorkoutPlanner';
import UserProfile from './components/UserProfile';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">      
        <Routes>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/home-page" element={<Home />} />
          <Route path="/diet-tracker" element={<DietTracker />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/workout-planner" element={<WorkoutPlanner />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;