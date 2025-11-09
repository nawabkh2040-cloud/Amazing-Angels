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
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-200 flex items-center justify-center overflow-hidden group hover:shadow-[0_0_20px_rgba(30,58,138,0.3)] transition-all duration-300"
      aria-label="Scroll to top"
    >
      {/* Progress Ring */}
      <svg className="absolute inset-0 w-14 h-14 -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="#e5e7eb"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="url(#blueGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 24}`}
          strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Arrow Icon */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 rounded-full group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.5)]">
        <ArrowUp className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ScrollProgress;
