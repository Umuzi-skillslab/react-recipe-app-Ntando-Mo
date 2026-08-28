import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/recipes')}>Back to Recipes</button>
      <h2>Recipe Detail for ID: {id}</h2>
    </div>
  );
};
export default RecipeDetail;