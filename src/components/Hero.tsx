import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mockup, MockupFrame } from './ui/mockup';
import { Glow } from './ui/glow';
import heroImage from '@/assets/hero-bg.jpg';
import { cn } from '@/lib/utils';

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
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0 relative"
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          <Badge variant="outline" className="animate-appear gap-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-muted-foreground">Established 2017</span>
            <Link to="/about" className="flex items-center gap-1 hover:text-foreground transition-colors">
              100% Board Exam Success
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Badge>

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Welcome to Amazing Angels Public School
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Empowering Minds, Enriching Lives. Quality English medium education in Khajrana, Indore.
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300 flex-col sm:flex-row">
            <Button variant="glow" size="lg" asChild>
              <Link to="/admissions" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Apply Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about" className="flex items-center gap-2">
                Explore More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image with Glow */}
          <div className="relative pt-12 w-full">
            <MockupFrame
              className="animate-appear opacity-0 delay-700 mx-auto"
              size="small"
            >
              <Mockup type="responsive">
                <img
                  src={heroImage}
                  alt="Amazing Angels Public School Campus"
                  className="w-full h-auto"
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
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
                className="bg-accent/10 backdrop-blur-md p-6 rounded-xl border border-border hover:bg-accent/20 transition-all hover:scale-105"
              >
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
