import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>
              <img 
                src="/recipehub-logo.svg" 
                alt="FlavourFlow Logo" 
                className={styles.logoIcon} 
              />
              FlavourFlow
            </Link>
            <p className={styles.description}>
              Curating culinary experiences through intuitive design and seamless meal planning.
            </p>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <nav className={styles.navLinks}>
              <Link to="/">Home</Link>
              <Link to="/recipes">All Recipes</Link>
              <Link to="/meal-planner">Meal Planner</Link>
              <Link to="/favorites">Saved Dishes</Link>
            </nav>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Support</h4>
            <nav className={styles.navLinks}>
              <Link to="/faq">FAQs & Guides</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>&copy; {currentYear} FlavourFlow. Designed & Developed by Ntando.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;