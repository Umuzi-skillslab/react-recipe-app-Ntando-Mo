import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">🍽️ RecipeHub</Link>
      </div>
      
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>

      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <Link 
          to="/" 
          className={location.pathname === '/' ? styles.active : ''}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/recipes" 
          className={location.pathname.includes('/recipes') ? styles.active : ''}
          onClick={() => setIsOpen(false)}
        >
          Recipes
        </Link>
        <Link 
          to="/meal-planner" 
          className={location.pathname === '/meal-planner' ? styles.active : ''}
          onClick={() => setIsOpen(false)}
        >
          Meal Planner
        </Link>
        <Link 
          to="/favorites" 
          className={location.pathname === '/favorites' ? styles.active : ''}
          onClick={() => setIsOpen(false)}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;