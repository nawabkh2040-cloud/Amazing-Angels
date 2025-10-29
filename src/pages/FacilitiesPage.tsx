import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import Facilities from '@/components/Facilities';
import { motion } from 'framer-motion';
import bannerImage from '@/assets/banner-facilities.jpg';

const FacilitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <ScrollProgress />
        
        {/* Page Banner */}
        <section className="relative py-20 bg-gradient-to-br from-primary/95 via-accent/95 to-secondary/95 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/80 to-secondary/90" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Facilities</h1>
              <p className="text-xl text-white/90">World-class infrastructure for holistic development</p>
            </motion.div>
          </div>
        </section>

        <Facilities />
      </div>
    </PageTransition>
  );
};

export default FacilitiesPage;
