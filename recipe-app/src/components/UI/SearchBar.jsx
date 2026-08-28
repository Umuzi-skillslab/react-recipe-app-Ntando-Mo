import PropTypes from 'prop-types';
import Button from './Button';

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form 
      onSubmit={onSearchSubmit} 
      style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', maxWidth: '500px' }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search recipes by title or ingredient..."
        style={{
          padding: '0.5rem 1rem',
          borderRadius: 'var(--border-radius)',
          border: '1px solid #ccc',
          flex: '1',
          fontSize: '1rem'
        }}
      />
      <Button type="submit" variant="primary">Search</Button>
    </form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired
};

export default SearchBar;