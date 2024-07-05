import React from 'react';

function ExerciseDetail({ exercise, onClose }) {
  return (
    <div className="exercise-detail">
      
      <div className='exercise-name'>
      <h3>{exercise.name}</h3>
      <button className="close-button" onClick={onClose}>X</button>
      </div>  
      
      <div className="instructions">
      <img src={exercise.gif} height={300} alt={exercise.name} className="exercise-gif" /> 
        <div className='exercise-content'   >
        <h4>Instructions:</h4>
        <ul>
          {exercise.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        </div>
      </div>
      
      <div className="input-fields">
        {exercise.type === 'cardio' && (
          <>
            <input type="number" placeholder="Duration (minutes)" />
            <input type="number" placeholder="Distance (km)" />
            <input type="submit" className='submit'></input>
          </>
        )}
        {exercise.type === 'gym' && (
          <>
            <input type="number" placeholder="Sets" />
            <input type="number" placeholder="Reps" />
            <input type="number" placeholder="Weight (kg)" />
            <input type="submit" className='submit'></input>
          </>
        )}
        {exercise.type === 'yoga' && (
          <>
            <input type="number" placeholder="Duration (minutes)" />
            <input type="number" placeholder="Time Under Tension (seconds)" />
            <input type="submit" className='submit'></input>
          </>
        )}
      </div>
    </div>
  );
}

export default ExerciseDetail;
