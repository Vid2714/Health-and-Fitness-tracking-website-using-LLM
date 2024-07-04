import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import DietTracker from './components/DietTracker';
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