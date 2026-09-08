import { useState, useEffect } from "react";
import { recipesData } from "../data/recipesData";
import RecipeList from "../components/Recipe/RecipeList";
import RecipeFilter from "../components/Recipe/RecipeFilter";
import SearchBar from "../components/UI/SearchBar";
import Loading from "../components/UI/Loading";
import styles from "./RecipesPage.module.css";

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [cuisine, setCuisine] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = setTimeout(() => {
      try {
        setRecipes(recipesData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(fetchRecipes);
  }, []);

  const handleClearFilters = () => {
    setSearchQuery("");
    setCategory("all");
    setCuisine("all");
    setDifficulty("all");
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const lowerQuery = searchQuery.toLowerCase();

    const matchesSearch =
      recipe.title.toLowerCase().includes(lowerQuery) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerQuery),
      );

    const matchesCategory =
      category === "all" || recipe.category === category;

    const matchesCuisine =
      cuisine === "all" || recipe.cuisine === cuisine;

    const matchesDifficulty =
      difficulty === "all" || recipe.difficulty === difficulty;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCuisine &&
      matchesDifficulty
    );
  });

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return (
      <div className={styles.errorState}>
        <span className={styles.errorIcon}>⚠️</span>
        <h2>Something went wrong</h2>
        <p>We couldn't load the recipes. Please try again.</p>

        <button
          type="button"
          className={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.eyebrow}>The Recipe Collection</span>
        <h1>Find Your Next Favourite</h1>
        <p>
          Explore delicious recipes, discover new flavours, and find
          something perfect for your next meal.
        </p>
      </header>

      <section className={styles.searchSection}>
        <div className={styles.searchHeader}>
          <div>
            <h2>What are you craving?</h2>
            <p>Search by recipe name or ingredient.</p>
          </div>

          <span className={styles.resultCount}>
            {filteredRecipes.length} recipes
          </span>
        </div>

        <SearchBar
          searchTerm={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
          onSearchSubmit={(e) => e.preventDefault()}
        />
      </section>

      <section className={styles.filterSection}>
        <div className={styles.filterHeading}>
          <div>
            <h2>Refine Your Search</h2>
            <p>Filter by category, cuisine, or difficulty.</p>
          </div>
        </div>

        <RecipeFilter
          category={category}
          setCategory={setCategory}
          cuisine={cuisine}
          setCuisine={setCuisine}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onClear={handleClearFilters}
        />
      </section>

      {filteredRecipes.length > 0 && (
        <section className={styles.resultsSection}>
          <div className={styles.resultsHeading}>
            <h2>Recipes</h2>
            <span>{filteredRecipes.length} found</span>
          </div>

          <RecipeList recipes={filteredRecipes} />
        </section>
      )}

      {filteredRecipes.length === 0 && (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>🍽️</span>
          <h2>No recipes found</h2>
          <p>
            Try adjusting your search or clearing some of your filters.
          </p>

          <button
            type="button"
            className={styles.retryButton}
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipesPage;