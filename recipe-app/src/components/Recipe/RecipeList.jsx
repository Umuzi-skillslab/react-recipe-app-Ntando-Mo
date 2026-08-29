import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';
import styles from './RecipeList.module.css';

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>No recipes found.</p>;
  }

  return (
    <div className={styles.grid}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;