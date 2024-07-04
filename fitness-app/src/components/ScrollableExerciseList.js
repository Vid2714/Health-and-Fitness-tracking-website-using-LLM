import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ScrollableExerciseList({ exercises, onSelectExercise }) {
  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + exercises.length) % exercises.length);
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % exercises.length);
  };

  const visibleExercises = [...exercises.slice(startIndex), ...exercises.slice(0, startIndex)].slice(0, 5);

  return (
    <div className="scrollable-exercise-list">
      <button className="scroll-button left" onClick={scrollLeft}>
        <ChevronLeft size={24} />
      </button>
      <div className="exercise-list">
        {visibleExercises.map((exercise, index) => (
          <div
            key={index}
            className="exercise-item"
            onClick={() => onSelectExercise(exercise)}
          >
            <img src={exercise.image} alt={exercise.name} />
            <p>{exercise.name}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default ScrollableExerciseList;