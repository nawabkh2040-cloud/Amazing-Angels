import React, { useEffect, useRef } from 'react';

const Vision = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardsRef.current;
      
      cards.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight * 0.8)
        ));
        
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          if (nextCard) {
            const nextRect = nextCard.getBoundingClientRect();
            const nextProgress = Math.max(0, Math.min(1,
              (windowHeight - nextRect.top) / (windowHeight * 0.8)
            ));
            
            const scale = 1 - (nextProgress * 0.08);
            const translateY = -(nextProgress * 30);
            const opacity = 1 - (nextProgress * 0.3);
            
            const cardInner = card.querySelector('.stacking-card');
            if (cardInner) {
              cardInner.style.transform = `scale(${scale}) translateY(${translateY}px)`;
              cardInner.style.opacity = opacity;
            }
          }
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fafafa; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .card-wrapper { position: sticky; top: 10vh; }
        .stacking-card {
          transition: transform 0.1s linear, opacity 0.1s linear;
          transform-origin: center top;
          will-change: transform, opacity;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center px-6 py-10 md:py-24 bg-white">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gray-800">
              Our Vision and{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Mission
              </span>
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Discover the guiding principles that shape our commitment to excellence in education at Amazing Angels Public School.
          </p>
        </div>
      </section>

      {/* Stacking Cards */}
      <section className="relative z-10 py-1 ">

        {/* Card 1: Vision */}
        <div ref={el => cardsRef.current[0] = el} className="card-wrapper flex items-center justify-center px-4 md:px-8 lg:px-12 mb-8">
          <div className="stacking-card flex items-center justify-center max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.08)] grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Image */}
            <div className="w-full h-40 lg:h-80 ">
              <img
                src="/vision2.png"
                alt="Vision"
                className="w-full h-full object-contain "
              />
            </div>

            {/* Right Text */}
            <div className="p-2 lg:p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-5 w-fit shadow-md">
                <span className="w-1.5 h-1.5 bg-white rounded-full" style={{ animation: 'pulse 2s infinite' }} />
                Our Vision
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl p-2 font-semibold text-gray-900 mb-3">
                Empowering Minds, Enriching Lives
              </h2>
              <p className="text-sm md:text-base p-2 text-gray-600 leading-relaxed">
                We envision a world where every child grows with curiosity, compassion, and courage.
                Our vision is to create leaders who think critically, act ethically, and serve humanity with purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Mission */}
        <div ref={el => cardsRef.current[1] = el} className="card-wrapper flex items-center justify-center px-4 md:px-8 lg:px-12">
          <div className="stacking-card max-w-5xl flex items-center justify-center w-full bg-white rounded-3xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.08)] grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Image (same as Vision) */}
            <div className="w-full h-40 lg:h-80 ">
              <img
                src="/mission.png"
                alt="Mission"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Text */}
            <div className="p-2 lg:p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-5 w-fit shadow-md">
                <span className="w-1.5 h-1.5 bg-white rounded-full" style={{ animation: 'pulse 2s infinite' }} />
                Our Mission
              </span>
              <h2 className="text-2xl md:text-3xl p-2 lg:text-4xl font-semibold text-gray-900 mb-3">
                Nurturing Future Leaders
              </h2>
              <p className="text-sm md:text-base p-2 text-gray-600 leading-relaxed">
                Our mission is to provide a holistic education that nurtures intellectual growth,
                moral integrity, and a lifelong passion for learning. We aim to cultivate teamwork,
                resilience, and empathy — preparing every student to thrive in a changing world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
