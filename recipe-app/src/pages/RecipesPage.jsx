import { useState } from 'react';
import { recipesData } from '../data/recipesData';
import RecipeList from '../components/Recipe/RecipeList';
import SearchBar from '../components/UI/SearchBar';

const RecipesPage = () => {
  // Create a state variable to hold the user's search text
  const [searchQuery, setSearchQuery] = useState('');

  // Update the state every time the user types a keystroke
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Prevent the browser from refreshing when the user hits 'Enter'
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  // Filter the dummy data array based on the current search query
  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>All Recipes</h1>
        <p>Discover your next favorite meal.</p>
      </div>
      
      <SearchBar 
        searchTerm={searchQuery} 
        onSearchChange={handleSearchChange} 
        onSearchSubmit={handleSearchSubmit} 
      />
      
      {/* Pass the newly filtered array instead of the raw data */}
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default RecipesPage;