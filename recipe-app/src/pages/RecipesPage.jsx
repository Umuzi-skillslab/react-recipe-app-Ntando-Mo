import { recipesData } from '../data/recipesData';
import RecipeList from '../components/Recipe/RecipeList';
import SearchBar from '../components/UI/SearchBar';

const RecipesPage = () => {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>All Recipes</h1>
        <p>Discover your next favorite meal.</p>
      </div>
      
      <SearchBar 
        searchTerm="" 
        onSearchChange={() => {}} 
        onSearchSubmit={(e) => e.preventDefault()} 
      />
      
      <RecipeList recipes={recipesData} />
    </div>
  );
};

export default RecipesPage;