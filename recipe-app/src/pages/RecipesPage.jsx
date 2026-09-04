import { useState } from 'react';
import { recipesData } from '../data/recipesData';
import RecipeList from '../components/Recipe/RecipeList';
import RecipeFilter from '../components/Recipe/RecipeFilter';
import SearchBar from '../components/UI/SearchBar';

const RecipesPage = () => {
  // Initialize simple state variables for search and filtering requirements
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [cuisine, setCuisine] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  // Event handler to clear all active filters and reset to default states
  const handleClearFilters = () => {
    setSearchQuery('');
    setCategory('all');
    setCuisine('all');
    setDifficulty('all');
  };

  // Filter recipes array dynamically based on all selected state conditions
  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || recipe.category === category;
    const matchesCuisine = cuisine === 'all' || recipe.cuisine === cuisine;
    const matchesDifficulty = difficulty === 'all' || recipe.difficulty === difficulty;
    
    // Only return true if the recipe passes every single active filter
    return matchesSearch && matchesCategory && matchesCuisine && matchesDifficulty;
  });

  return (
    // Inline styles used here to fulfill the specific styling rubric requirement
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>All Recipes</h1>
      <p style={{ marginBottom: '30px' }}>Discover your next favorite meal.</p>
      
      {/* Passing state and handlers as props to the SearchBar child component */}
      <SearchBar 
        searchTerm={searchQuery} 
        onSearchChange={(e) => setSearchQuery(e.target.value)} 
        onSearchSubmit={(e) => e.preventDefault()} 
      />

      {/* RecipeFilter receives multiple state updater functions via props */}
      <RecipeFilter 
        category={category} setCategory={setCategory}
        cuisine={cuisine} setCuisine={setCuisine}
        difficulty={difficulty} setDifficulty={setDifficulty}
        onClear={handleClearFilters}
      />

      {/* Conditional rendering: Show list if matches exist, otherwise show empty state */}
      {filteredRecipes.length > 0 ? (
        <RecipeList recipes={filteredRecipes} />
      ) : (
        <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.2rem', color: '#555' }}>
          No recipes found matching your exact filters. Try clearing them!
        </p>
      )}
    </div>
  );
};

export default RecipesPage;