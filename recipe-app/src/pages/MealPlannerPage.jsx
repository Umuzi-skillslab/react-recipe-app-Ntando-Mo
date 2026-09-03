import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipesData';
import Button from '../components/UI/Button';
import styles from './MealPlannerPage.module.css';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MealPlannerPage = () => {
  // Initialize state from localStorage to prevent data loss on refresh
  const [planner, setPlanner] = useState(() => {
    const savedPlanner = localStorage.getItem('recipePlanner');
    return savedPlanner ? JSON.parse(savedPlanner) : {};
  });

  // Sync with localStorage every time a meal is added or removed
  useEffect(() => {
    localStorage.setItem('recipePlanner', JSON.stringify(planner));
  }, [planner]);

  const handleSelectMeal = (day, recipeId) => {
    setPlanner((prev) => ({ ...prev, [day]: recipeId }));
  };

  const handleClearDay = (day) => {
    setPlanner((prev) => {
      const updatedPlanner = { ...prev };
      delete updatedPlanner[day];
      return updatedPlanner;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Weekly Meal Planner</h1>
        <p>Organize your cooking schedule for the week ahead.</p>
      </div>

      <div className={styles.grid}>
        {daysOfWeek.map((day) => {
          const assignedRecipeId = planner[day];
          const assignedRecipe = recipesData.find((r) => r.id === assignedRecipeId);

          return (
            <div key={day} className={styles.dayCard}>
              <h3 className={styles.dayTitle}>{day}</h3>
              
              {!assignedRecipe ? (
                <select 
                  className={styles.select} 
                  onChange={(e) => handleSelectMeal(day, e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>Select a meal...</option>
                  {recipesData.map((recipe) => (
                    <option key={recipe.id} value={recipe.id}>
                      {recipe.title}
                    </option>
                  ))}
                </select>
              ) : (
                <div className={styles.mealInfo}>
                  <span className={styles.mealTitle}>{assignedRecipe.title}</span>
                  <span className={styles.mealMeta}>⏱️ Prep: {assignedRecipe.prepTime}</span>
                  <Button variant="danger" onClick={() => handleClearDay(day)}>
                    Remove
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealPlannerPage;