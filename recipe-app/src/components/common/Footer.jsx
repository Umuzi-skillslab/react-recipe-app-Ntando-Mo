import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

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
                alt="FlavorFlow Logo"
                className={styles.logoIcon}
              />
              FlavourFlow
            </Link>

            <p className={styles.description}>
              Discover delicious recipes, plan your week, and make every
              meal worth remembering.
            </p>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Explore</h4>

            <nav className={styles.navLinks}>
              <Link to="/">Home</Link>
              <Link to="/recipes">All Recipes</Link>
              <Link to="/meal-planner">Meal Planner</Link>
              <Link to="/favorites">Favourites</Link>
            </nav>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>FlavourFlow</h4>

            <div className={styles.navLinks}>
              <span>Discover new flavours</span>
              <span>Plan your weekly meals</span>
              <span>Save your favourite dishes</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>
            &copy; {currentYear} FlavourFlow. Designed &amp; Developed by
            Ntando.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;