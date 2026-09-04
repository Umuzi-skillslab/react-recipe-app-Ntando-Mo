import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import Card from '../UI/Card';

const RecipeCard = ({ recipe, onFavorite }) => {
  return (
    <Card>
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
      />
      <div style={{ padding: '20px' }}>
        <p style={{ fontSize: '0.75rem', color: '#c2a878', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>
          {recipe.category}
        </p>
        <h3 style={{ margin: '0 0 15px 0', color: '#1f3d2b', fontSize: '1.25rem' }}>
          {recipe.title}
        </h3>
        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '20px' }}>
          ⏱️ Prep: {recipe.prepTime}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* This exact string interpolation fixes the routing bug */}
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
            <Button variant="primary">View</Button>
          </Link>
          
          <Button variant="secondary" onClick={() => onFavorite(recipe)}>
            ❤️ Save
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Props Validation and Default Props
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    category: PropTypes.string,
    prepTime: PropTypes.string,
  }).isRequired,
  onFavorite: PropTypes.func,
};

RecipeCard.defaultProps = {
  onFavorite: () => console.log('Favorite button clicked'),
};

export default RecipeCard;