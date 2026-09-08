import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeList from "../components/Recipe/RecipeList";
import Button from "../components/UI/Button";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Your Collection</span>
        <h1>My Favourites</h1>
        <p>
          Keep your favourite recipes close and build your personal
          collection of dishes worth making again.
        </p>
      </header>

      {favorites.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.icon}>♡</span>
          <h2>Your collection is empty</h2>
          <p>
            Explore our recipes and save the dishes you love. They'll
            appear here whenever you need inspiration.
          </p>

          <Link to="/recipes">
            <Button variant="primary">Explore Recipes</Button>
          </Link>
        </div>
      ) : (
        <RecipeList recipes={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;