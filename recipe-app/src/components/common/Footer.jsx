const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ecf0f1', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} RecipeHub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;