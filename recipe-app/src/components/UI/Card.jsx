import PropTypes from 'prop-types';

const Card = ({ children, customStyle }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    margin: '1rem',
    ...customStyle
  };

  return <div style={cardStyle}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.object
};

export default Card;