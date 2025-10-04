import { useEffect, useState } from 'react';
import logo from '@/assets/logo.jpg';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent">
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          <img
            src={logo}
            alt="AAPS Logo"
            className="h-32 w-32 mx-auto object-contain animate-bounce-slow"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          Amazing Angels
        </h1>
        <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Public School
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
