'use client';

import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="circle-border"></div>
        <img src="/images/logo.png" alt="Ghiath Bourhani Logo" className="spinning-logo" />
      </div>
    </div>
  );
};

export default Loader;