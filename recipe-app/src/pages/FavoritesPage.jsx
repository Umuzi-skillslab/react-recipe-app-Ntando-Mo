import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import RecipeList from '../components/Recipe/RecipeList';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>My Favorites</h1>
        <p>Your personal collection of saved recipes.</p>
      </div>

      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--white)', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
          <h3>No favorites yet!</h3>
          <p>Go to the Recipes page and click "Save" on a few meals to see them here.</p>
        </div>
      ) : (
        <RecipeList recipes={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;