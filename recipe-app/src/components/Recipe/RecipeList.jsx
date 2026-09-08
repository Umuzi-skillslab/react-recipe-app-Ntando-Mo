import { useContext } from "react";
import PropTypes from "prop-types";
import RecipeCard from "./RecipeCard";
import { FavoritesContext } from "../../context/FavoritesContext";
import styles from "./RecipeList.module.css";
const RecipeList = ({ recipes }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  return (
    <div className={styles.grid}>
      {" "}
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onFavorite={() => toggleFavorite(recipe)}
          isSaved={favorites.some((fav) => fav.id === recipe.id)}
        />
      ))}{" "}
    </div>
  );
};
RecipeList.propTypes = { recipes: PropTypes.array.isRequired };
export default RecipeList;
