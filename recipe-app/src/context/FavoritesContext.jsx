import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // Check localStorage fist when the app loads
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('recipeFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Watch the 'favorites' array. If it changes, update localStorage
  useEffect(() => {
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some((fav) => fav.id === recipe.id);
      if (isFavorited) {
        return prevFavorites.filter((fav) => fav.id !== recipe.id);
      }
      return [...prevFavorites, recipe];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired
};