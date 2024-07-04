import React, { useState } from 'react';
import Cardio from './Cardio';
import Gym from './Gym';
import Yoga from './Yoga';
import './WorkoutPlanner.css';

function WorkoutPlanner(){
  return (
    <div className="workout-planner">
      <h1>Workout Planner</h1>
      <Cardio/>
      <Gym/>
      <Yoga/>

    </div>
  );
};

export default WorkoutPlanner;