import { useState, useEffect } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', fontSize: '1.5rem', color: '#1f3d2b', fontWeight: 'bold' }}>
      Fetching delicious recipes{dots}
    </div>
  );
};

export default Loading;