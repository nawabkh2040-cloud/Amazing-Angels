import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary/10 backdrop-blur-md border-2 border-primary hover:bg-primary/20 transition-all hover:scale-110 group"
      aria-label="Scroll to top"
    >
      <svg className="absolute inset-0 w-14 h-14 -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-muted"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-primary transition-all duration-300"
          strokeDasharray={`${2 * Math.PI * 24}`}
          strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
        />
      </svg>
      <ArrowUp className="absolute inset-0 m-auto w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
    </button>
  );
};

export default ScrollProgress;
