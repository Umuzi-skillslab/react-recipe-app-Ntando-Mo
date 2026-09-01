import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  
  const isFavorited = favorites.some((fav) => fav.id === recipe.id);

  const cardStyles = {
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  };

  return (
    <Card customStyle={cardStyles}>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      
      <div className={styles.content}>
        <span className={styles.tag}>{recipe.category}</span>
        <h3 className={styles.title}>{recipe.title}</h3>
        <p className={styles.meta}>⏱️ Prep: {recipe.prepTime}</p>
        
        <div className={styles.actions}>
          <Link to={`/recipes/${recipe.id}`}>
            <Button variant="primary">View</Button>
          </Link>
          <Button 
            variant={isFavorited ? 'danger' : 'secondary'} 
            onClick={() => toggleFavorite(recipe)}
          >
            {isFavorited ? 'Unsave' : '❤️ Save'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    prepTime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default RecipeCard;