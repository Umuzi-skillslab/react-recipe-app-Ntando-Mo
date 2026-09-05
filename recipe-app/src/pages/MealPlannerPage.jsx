import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipesData';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import styles from './MealPlannerPage.module.css';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealSlots = ['breakfast', 'lunch', 'dinner'];

const MealPlannerPage = () => {
  const [planner, setPlanner] = useState(() => {
    const savedPlanner = localStorage.getItem('recipePlanner');
    if (savedPlanner) return JSON.parse(savedPlanner);

    const defaultState = {};
    daysOfWeek.forEach(day => {
      defaultState[day] = { breakfast: null, lunch: null, dinner: null };
    });
    return defaultState;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('recipePlanner', JSON.stringify(planner));
  }, [planner]);

  const handleSelectMeal = (day, slot, recipeId) => {
    setPlanner((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [slot]: parseInt(recipeId, 10)
      }
    }));
  };

  const handleClearMeal = (day, slot) => {
    setPlanner((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [slot]: null
      }
    }));
  };

  const handleClearAll = () => {
    const emptyState = {};
    daysOfWeek.forEach(day => {
      emptyState[day] = { breakfast: null, lunch: null, dinner: null };
    });
    setPlanner(emptyState);
    setIsModalOpen(false); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Weekly Meal Planner</h1>
        <p>Organize your cooking schedule for the week ahead.</p>
        
        <div style={{ marginTop: '20px' }}>
          <Button variant="danger" onClick={() => setIsModalOpen(true)}>
            🗑️ Clear Entire Planner
          </Button>
        </div>
      </div>

      <div className={styles.grid}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayCard}>
            <h3 className={styles.dayTitle}>{day}</h3>
            
            {mealSlots.map((slot) => {
              const assignedRecipeId = planner[day]?.[slot];
              const assignedRecipe = recipesData.find((r) => r.id === assignedRecipeId);

              return (
                <div key={slot} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                  <h4 style={{ textTransform: 'capitalize', color: '#1f3d2b', fontSize: '0.9rem', margin: '0 0 10px 0' }}>
                    {slot}
                  </h4>

                  {!assignedRecipe ? (
                    <select 
                      className={styles.select} 
                      onChange={(e) => handleSelectMeal(day, slot, e.target.value)}
                      value={assignedRecipeId || ""} 
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
                      <Button variant="danger" onClick={() => handleClearMeal(day, slot)}>
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#1f3d2b', marginBottom: '15px' }}>Clear Meal Planner?</h2>
            <p style={{ marginBottom: '25px', color: '#666', lineHeight: '1.6' }}>
              Are you sure you want to delete all planned meals for the week? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button variant="danger" onClick={handleClearAll}>Yes, Clear All</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MealPlannerPage;