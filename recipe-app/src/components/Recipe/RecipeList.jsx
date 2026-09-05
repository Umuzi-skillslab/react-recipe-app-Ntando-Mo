import { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';
import { FavoritesContext } from '../../context/FavoritesContext';

const RecipeList = ({ recipes }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  // Changed 'auto-fit' to 'auto-fill' below to lock the card sizes when items are removed
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onFavorite={() => toggleFavorite(recipe)} 
          isSaved={favorites.some((fav) => fav.id === recipe.id)}
        />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;