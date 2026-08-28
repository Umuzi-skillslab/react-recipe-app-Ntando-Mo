import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  // Using conditional styling based on the variant prop
  const getBackgroundColor = () => {
    switch (variant) {
      case 'secondary': return 'var(--secondary-gold)';
      case 'danger': return 'var(--danger-red)';
      case 'primary':
      default: return 'var(--primary-green)';
    }
  };

  const buttonStyle = {
    backgroundColor: getBackgroundColor(),
    color: variant === 'secondary' ? 'var(--text-dark)' : 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--border-radius)',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'opacity 0.3s'
  };

  return (
    <button 
      type={type} 
      style={buttonStyle} 
      onClick={onClick}
      onMouseEnter={(e) => e.target.style.opacity = 0.8}
      onMouseLeave={(e) => e.target.style.opacity = 1}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;