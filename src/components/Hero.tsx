import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-school.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about-preview');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={cn(
        "relative bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/85 to-secondary/90" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-12 pt-16 sm:gap-24 relative z-10">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          <Badge variant="outline" className="animate-appear gap-2 bg-white/10 backdrop-blur-sm border-white/20">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white/90">Established 2017</span>
            <Link to="/about" className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
              100% Board Exam Success
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Badge>

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear text-white drop-shadow-2xl text-4xl font-semibold leading-tight sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Welcome to Amazing Angels Public School
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-white/90 opacity-0 delay-100 sm:text-xl">
            Empowering Minds, Enriching Lives. Quality English medium education in Khajrana, Indore.
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300 flex-col sm:flex-row">
            <Button variant="default" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/admissions" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Apply Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/50 text-white hover:bg-white/10">
              <Link to="/about" className="flex items-center gap-2">
                Explore More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
          >
            {[
              { value: '300+', label: 'Students' },
              { value: '100%', label: 'Board Success' },
              { value: '7+', label: 'Years Legacy' },
              { value: '2400', label: 'Sq Ft Campus' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
