import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Goals from '@/components/Goals';
import { motion, useScroll, useTransform } from 'framer-motion';
import bannerImage from '@/assets/hero-school.jpg';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const bannerY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="pt-10">
        <ScrollProgress />

        {/* Premium Page Banner with Parallax */}
        <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] overflow-hidden">
          {/* Animated background image with parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ 
              backgroundImage: `url(${bannerImage})`,
              y: bannerY
            }}
          />
          
          {/* Gradient overlay with animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#1e3a8a]/85 to-[#1e40af]/90"
            style={{ opacity: bannerOpacity }}
          />

          {/* Decorative animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-4xl"
            >
              {/* Subtitle badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium tracking-wider">
                  WHO WE ARE
                </span>
              </motion.div>

              {/* Main heading with stagger effect */}
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                About{' '}
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Us
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Discover our story, vision, and commitment to excellence in education
              </motion.p>

              {/* Decorative line */}
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-white/70 text-sm font-medium tracking-wider">SCROLL DOWN</span>
                <svg
                  className="w-6 h-6 text-white/70"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Content sections with stagger animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <About />
          <VisionMission />
          <Goals />
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;