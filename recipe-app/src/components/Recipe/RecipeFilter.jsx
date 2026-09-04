import PropTypes from 'prop-types';
import styles from './RecipeFilter.module.css';

const RecipeFilter = ({ 
  category, setCategory, 
  cuisine, setCuisine, 
  difficulty, setDifficulty, 
  onClear 
}) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.selectGroup}>
        <select className={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>

      <div className={styles.selectGroup}>
        <select className={styles.select} value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="all">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Asian">Asian</option>
          <option value="American">American</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Indian">Indian</option>
        </select>
      </div>

      <div className={styles.selectGroup}>
        <select className={styles.select} value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button className={styles.clearButton} onClick={onClear} type="button">
        Clear Filters
      </button>
    </div>
  );
};

RecipeFilter.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  cuisine: PropTypes.string.isRequired,
  setCuisine: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default RecipeFilter;