import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./RecipeCard.module.css";
const RecipeCard = ({ recipe, onFavorite, isSaved }) => {
  const handleSaveClick = (e) => {
    e.preventDefault();
    onFavorite();
  };
  return (
    <Card>
      {" "}
      <div className={styles.imageWrapper}>
        {" "}
        <img
          src={recipe.image}
          alt={recipe.title}
          className={styles.image}
        />{" "}
        <span className={styles.categoryBadge}>{recipe.category}</span>{" "}
      </div>{" "}
      <div className={styles.content}>
        {" "}
        <div className={styles.recipeInfo}>
          {" "}
          <h3 className={styles.title}>{recipe.title}</h3>{" "}
          <p className={styles.description}> {recipe.description} </p>{" "}
          <div className={styles.meta}>
            {" "}
            <span>⏱️ {recipe.prepTime}</span> <span>•</span>{" "}
            <span>{recipe.difficulty}</span>{" "}
          </div>{" "}
        </div>{" "}
        <div className={styles.actions}>
          {" "}
          <Link to={`/recipes/${recipe.id}`} className={styles.viewLink}>
            {" "}
            <Button variant="primary">View Recipe</Button>{" "}
          </Link>{" "}
          <button
            className={isSaved ? styles.btnSaved : styles.btnSave}
            onClick={handleSaveClick}
            aria-label={
              isSaved
                ? `Remove ${recipe.title} from favourites`
                : `Save ${recipe.title} to favourites`
            }
          >
            {" "}
            <span className={styles.icon}> {isSaved ? "♥" : "♡"} </span>{" "}
            <span>{isSaved ? "Saved" : "Save"}</span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </Card>
  );
};
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    prepTime: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onFavorite: PropTypes.func.isRequired,
  isSaved: PropTypes.bool,
};
RecipeCard.defaultProps = { isSaved: false };
export default RecipeCard;
