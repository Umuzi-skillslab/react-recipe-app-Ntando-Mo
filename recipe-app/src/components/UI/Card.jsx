import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children, customStyle }) => {
  return (
    <div className={styles.card} style={customStyle}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.object
};

export default Card;