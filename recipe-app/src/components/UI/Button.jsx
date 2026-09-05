import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'secondary': return 'transparent';
      case 'danger': return 'var(--danger-red)';
      case 'primary':
      default: return 'var(--primary-green)';
    }
  };

  const buttonStyle = {
    backgroundColor: getBackgroundColor(),
    color: variant === 'secondary' ? 'var(--primary-green)' : 'var(--white)',
    border: variant === 'secondary' ? '2px solid var(--primary-green)' : 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '600',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'inline-block'
  };

  return (
    <button 
      type={type} 
      style={buttonStyle} 
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px) scale(1.02)';
        e.target.style.boxShadow = '0 10px 20px rgba(31, 61, 43, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'none';
        e.target.style.boxShadow = 'none';
      }}
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