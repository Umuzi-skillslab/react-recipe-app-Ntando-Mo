import PropTypes from "prop-types";
import Button from "./Button";
import styles from "./SearchBar.module.css";

const SearchBar = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <form className={styles.form} onSubmit={onSearchSubmit}>
      <div className={styles.inputWrapper}>
        <span className={styles.searchIcon}>⌕</span>

        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search by recipe or ingredient..."
          aria-label="Search recipes"
          className={styles.input}
        />
      </div>

      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;