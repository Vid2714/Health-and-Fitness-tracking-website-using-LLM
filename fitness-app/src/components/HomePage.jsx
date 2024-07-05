import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to FitTrack</h1>
        <p>Your personal fitness journey starts here</p>
        <button onClick={() => handleNavigation('/sign-up')} className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Track Workouts</h2>
          <p>Log and monitor your daily exercises</p>
        </div>
        <div className="feature">
          <h2>Nutrition Plans</h2>
          <p>Customize your diet for optimal results</p>
        </div>
        <div className="feature">
          <h2>Progress Analytics</h2>
          <p>Visualize your fitness journey</p>
        </div>
      </section>

      <section className="featured-workouts">
        <h2>Featured Workouts</h2>
        <div className="workout-list">
          <div className="workout-card">
            <h3>Full Body HIIT</h3>
            <p>30 min • High Intensity</p>
          </div>
          <div className="workout-card">
            <h3>Yoga for Flexibility</h3>
            <p>45 min • Low Intensity</p>
          </div>
          <div className="workout-card">
            <h3>Core Strength</h3>
            <p>20 min • Medium Intensity</p>
          </div>
        </div>
      </section>

      <section className="nutrition-tips">
        <h2>Nutrition Tip of the Day</h2>
        <blockquote>
          "Eating a balanced diet with plenty of fruits and vegetables can boost your energy and improve recovery times."
        </blockquote>
      </section>

      <section className="testimonial">
        <h2>What Our Users Say</h2>
        <blockquote>
          "FitTrack has completely transformed my approach to fitness. I've never felt healthier!"
          <footer>— Sarah J., FitTrack User</footer>
        </blockquote>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Fitness Journey?</h2>
        <button onClick={() => handleNavigation('/sign-up')} className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
}

export default HomePage;