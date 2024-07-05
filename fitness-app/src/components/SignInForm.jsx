import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signForm.css'

function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="signForm">
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <p>New User? <span className="hyperlink" onClick={() => navigate('/sign-up')}>Sign up here</span></p>      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
    </div>
  );
}

export default SignInForm;
