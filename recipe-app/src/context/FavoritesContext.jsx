import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

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