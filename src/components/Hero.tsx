import { Button } from './ui/button';
import { Sparkles, BookOpen, GraduationCap, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <BookOpen className="h-16 w-16 text-primary/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <GraduationCap className="h-20 w-20 text-accent/20" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Award className="h-12 w-12 text-secondary/30" />
        </div>
        <div className="absolute bottom-20 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="h-14 w-14 text-primary/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Established 2017 • 100% Board Exam Success</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Amazing Angels
            </span>
            <br />
            Public School
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Empowering Minds, Enriching Lives
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Quality English medium education in Khajrana, Indore. Affiliated with MP State Board, 
            we nurture academic excellence and holistic development in every child.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('#admissions')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg px-8 py-6"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#about')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg px-8 py-6"
            >
              Explore More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Board Success</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="text-3xl font-bold text-secondary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Years Legacy</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">2400</div>
              <div className="text-sm text-muted-foreground">Sq Ft Campus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
