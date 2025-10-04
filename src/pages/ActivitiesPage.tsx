import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import Activities from '@/components/Activities';
import { motion } from 'framer-motion';

const ActivitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <ScrollProgress />
        
        {/* Page Banner */}
        <section className="relative py-20 bg-gradient-to-r from-primary via-accent to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=1600&h=400&fit=crop')] opacity-20 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Activities</h1>
              <p className="text-xl text-white/90">Beyond academics - sports, culture, and creativity</p>
            </motion.div>
          </div>
        </section>

        <Activities />
      </div>
    </PageTransition>
  );
};

export default ActivitiesPage;
