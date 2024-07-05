import React, { useState, useEffect } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call to fetch user data
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    // This would typically be an API call
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'johndoe@example.com',
        workoutRoutine: [
          { day: 'Monday', activity: 'Chest and Triceps' },
          { day: 'Tuesday', activity: 'Back and Biceps' },
          { day: 'Wednesday', activity: 'Legs and Shoulders' },
          { day: 'Thursday', activity: 'Cardio' },
          { day: 'Friday', activity: 'Full Body Workout' },
          { day: 'Saturday', activity: 'Yoga' },
          { day: 'Sunday', activity: 'Rest' }
        ],
        dietStats: {
          caloriesPerDay: 2500,
          proteinPerDay: 150,
          carbsPerDay: 300,
          fatsPerDay: 80
        }
      });
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="profile-section">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <div className="profile-section">
        <h2>Daily Workout Routine</h2>
        <ul>
          {user.workoutRoutine.map((routine, index) => (
            <li key={index}><strong>{routine.day}:</strong> {routine.activity}</li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h2>Diet Stats</h2>
        <p><strong>Calories per day:</strong> {user.dietStats.caloriesPerDay}</p>
        <p><strong>Protein per day:</strong> {user.dietStats.proteinPerDay}g</p>
        <p><strong>Carbs per day:</strong> {user.dietStats.carbsPerDay}g</p>
        <p><strong>Fats per day:</strong> {user.dietStats.fatsPerDay}g</p>
      </div>
    </div>
  );
}

export default UserProfile;