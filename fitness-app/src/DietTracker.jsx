import React, { useState } from 'react';
import './DietTracker.css';

function DietTracker() {
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: []
  });
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  const handleAddMeal = () => {
    if (!mealName || !calories) {
      alert('Please enter meal name and calories.');
      return;
    }

    const newMeal = {
      id: Date.now(),
      name: mealName,
      calories: parseInt(calories),
      protein: parseInt(protein) || 0,
      carbs: parseInt(carbs) || 0,
      fat: parseInt(fat) || 0,
    };

    setMeals(prevMeals => ({
      ...prevMeals,
      [mealType]: [...prevMeals[mealType], newMeal]
    }));

    setMealName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');
  };

  const handleDeleteMeal = (type, id) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [type]: prevMeals[type].filter(meal => meal.id !== id)
    }));
  };

  const renderMealList = (type) => (
    <div className="meal-list">
      <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
      <ul>
        {meals[type].map((meal) => (
          <li key={meal.id}>
            {meal.name} - {meal.calories} cal, {meal.protein}g protein, {meal.carbs}g carbs, {meal.fat}g fat
            <button onClick={() => handleDeleteMeal(type, meal.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="DietTracker">
      <h1>Diet Tracker</h1>
      <div className="form-container">
        <div className="form">
          <h2>Add Meal</h2>
          <label htmlFor="mealType">Meal Type:</label>
          <select
            id="mealType"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="snacks">Snacks</option>
            <option value="dinner">Dinner</option>
          </select>
          <label htmlFor="mealName">Meal Name:</label>
          <input
            type="text"
            id="mealName"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <label htmlFor="protein">Protein (g):</label>
          <input
            type="number"
            id="protein"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
          <label htmlFor="carbs">Carbs (g):</label>
          <input
            type="number"
            id="carbs"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
          />
          <label htmlFor="fat">Fat (g):</label>
          <input
            type="number"
            id="fat"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
          <button onClick={handleAddMeal}>Add Meal</button>
        </div>
        <div className="meals-container">
          {renderMealList('breakfast')}
          {renderMealList('lunch')}
          {renderMealList('snacks')}
          {renderMealList('dinner')}
        </div>
      </div>
    </div>
  );
}

export default DietTracker;