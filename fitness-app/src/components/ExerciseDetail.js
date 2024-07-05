import React from 'react';

function ExerciseDetail({ exercise, onClose }) {
  return (
    <div className="exercise-detail">
      <button className="close-button" onClick={onClose}>X</button>
      <h3>{exercise.name}</h3>
      <img src={exercise.gif} height={300} alt={exercise.name} className="exercise-gif" />
      <div className="instructions">
        <h4>Instructions:</h4>
        <ul>
          {exercise.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
      <div className="input-fields">
        {exercise.type === 'cardio' && (
          <>
            <input type="number" placeholder="Duration (minutes)" />
            <input type="number" placeholder="Distance (km)" />
          </>
        )}
        {exercise.type === 'gym' && (
          <>
            <input type="number" placeholder="Sets" />
            <input type="number" placeholder="Reps" />
            <input type="number" placeholder="Weight (kg)" />
          </>
        )}
        {exercise.type === 'yoga' && (
          <>
            <input type="number" placeholder="Duration (minutes)" />
            <input type="number" placeholder="Time Under Tension (seconds)" />
          </>
        )}
      </div>
    </div>
  );
}

export default ExerciseDetail;
