import { useParams, useNavigate } from 'react-router-dom';
import { recipesData } from '../../data/recipesData';
import Button from '../UI/Button';
import styles from './RecipeDetail.module.css';

const RecipeDetail = () => {
  // Grab the dynamic ID from the URL (/recipes/:id)
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the specific recipe in our dummy data array
  const recipe = recipesData.find(r => r.id === parseInt(id, 10));

  // Handle the case where a user types an invalid ID in the URL
  if (!recipe) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Recipe Not Found</h2>
        <p>Sorry, we couldn't find the meal you were looking for.</p>
        <Button variant="primary" onClick={() => navigate('/recipes')}>Back to Recipes</Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <img src={recipe.image} alt={recipe.title} className={styles.heroImage} />
      
      <div className={styles.content}>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>

        <div className={styles.header}>
          <span className={styles.tag}>{recipe.category} • {recipe.prepTime}</span>
          <h1 className={styles.title}>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.sectionTitle}>Ingredients</h3>
            <ul className={styles.ingredientsList}>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Instructions</h3>
            <p style={{ lineHeight: '1.8' }}>{recipe.instructions}</p>
          </div>
        </div>

        {/* Multimedia: HTML5 Video */}
        <div className={styles.videoContainer}>
          <h3 className={styles.sectionTitle}>Cooking Tutorial</h3>
          <video className={styles.videoPlayer} controls>
            {/* Using a standard placeholder video for the capstone */}
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>

      </div>
    </div>
  );
};

export default RecipeDetail;