import { useParams, useNavigate } from "react-router-dom";
import { recipesData } from "../../data/recipesData";
import Button from "../UI/Button";
import VideoPlayer from "../Media/VideoPlayer";
import styles from "./RecipeDetail.module.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipesData.find((item) => item.id === parseInt(id, 10));

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <span>🍽️</span>
        <h2>Recipe Not Found</h2>
        <p>Sorry, we couldn't find the meal you were looking for.</p>

        <Button variant="primary" onClick={() => navigate("/recipes")}>
          Back to Recipes
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay}>
          <span>{recipe.category}</span>
        </div>
      </div>

      <div className={styles.content}>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          &larr; Back to Recipes
        </Button>

        <div className={styles.header}>
          <span className={styles.tag}>
            {recipe.cuisine} • {recipe.prepTime}
          </span>

          <h1 className={styles.title}>{recipe.title}</h1>

          <p className={styles.description}>{recipe.description}</p>

          <div className={styles.stats}>
            <div>
              <span>Difficulty</span>
              <strong>{recipe.difficulty}</strong>
            </div>

            <div>
              <span>Prep Time</span>
              <strong>{recipe.prepTime}</strong>
            </div>

            <div>
              <span>Servings</span>
              <strong>{recipe.servings}</strong>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <section className={styles.infoCard}>
            <h2 className={styles.sectionTitle}>Ingredients</h2>

            <ul className={styles.ingredientsList}>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.infoCard}>
            <h2 className={styles.sectionTitle}>Instructions</h2>

            <ol className={styles.instructionsList}>
              {recipe.instructions.map((step, index) => (
                <li key={index}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className={styles.videoSection}>
          <div className={styles.videoHeading}>
            <span className={styles.eyebrow}>Learn & Cook</span>
            <h2>Cooking Tutorial</h2>
            <p>Watch the tutorial and bring this recipe to life.</p>
          </div>

          <VideoPlayer videoUrl="/assets/videos/cooking-tutorial.mp4" />
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;