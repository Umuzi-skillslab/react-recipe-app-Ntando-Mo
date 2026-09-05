import { Link } from 'react-router-dom';
import { recipesData } from '../data/recipesData';
import Button from '../components/UI/Button';
import RecipeList from '../components/Recipe/RecipeList';
import styles from './Home.module.css';

const Home = () => {
  const featuredRecipes = recipesData.slice(0, 3);

  return (
    <div>
      <section className={styles.hero}>
        <span className={styles.heroTag}>Culinary Excellence</span>
        <h1 className={styles.heroTitle}>Master Your Kitchen.</h1>
        <p className={styles.heroSubtitle}>
          Discover curated recipes, plan your weekly meals, and save your favorite dishes all in one place.
        </p>
        <div className={styles.heroActions}>
          <Link to="/recipes">
            <Button variant="primary">Explore Recipes</Button>
          </Link>
          <Link to="/meal-planner">
            <Button variant="secondary">Plan Meals</Button>
          </Link>
        </div>
      </section>

      <img 
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
        alt="Fresh ingredients on a modern kitchen counter" 
        className={styles.heroBanner}
      />

      <section>
        <div className={styles.sectionTitle}>
          <h2>Trending This Week</h2>
          <p>Our most popular dishes, hand-picked for you.</p>
        </div>
        
        <RecipeList recipes={featuredRecipes} />
      </section>
    </div>
  );
};

export default Home;