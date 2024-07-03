import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import DietTracker from './DietTracker';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">        
        <Routes>
          <Route path="/diet-tracker" element={<DietTracker />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;