import { useEffect, useState } from 'react';
import { GraduationCap, BookOpen, Laptop, Users, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';

const Academics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: 'English Medium Education',
      description: 'Comprehensive curriculum designed to provide well-rounded education and ignite curiosity',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Dedicated educators who are mentors guiding students to reach their full potential',
    },
    {
      icon: Laptop,
      title: 'Technological Integration',
      description: 'Classrooms equipped with latest tools for interactive lessons and collaborative projects',
    },
    {
      icon: CheckCircle2,
      title: 'Continuous Evaluation',
      description: 'Regular feedback and assessment to track progress and foster continuous improvement',
    },
  ];

  return (
    <section id="academics" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header  */} 
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Academics</span>
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground  mx-auto">
            Excellence through comprehensive curriculum and innovative teaching
          </p>
        </div>

        {/* Success Rate Banner */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-to-r from-accent  via-blue-700 to-blue-800 text-white shadow-2xl">
          <div className="text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Unwavering Excellence</h3>
            <div className="text-6xl md:text-8xl font-bold mb-4">
              {count}%
            </div>
            <p className="text-xl md:text-2xl mb-4">Board Exam Success Rate</p>
            <p className="text-base max-w-2xl mx-auto opacity-90">
              This remarkable accomplishment is a reflection of our unwavering commitment to academic 
              excellence and the diligent efforts of our dedicated students and educators.
            </p>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-primary group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Teaching Methodology */}
        <Card className="p-8 bg-card shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Teaching Methodology</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-bold mb-2">Innovative Techniques</h4>
              <p className="text-sm text-muted-foreground">
                Diverse teaching methods catering to various learning styles with personalized attention
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h4 className="font-bold mb-2">Experiential Learning</h4>
              <p className="text-sm text-muted-foreground">
                Practical applications of knowledge integrated into lessons for critical thinking
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h4 className="font-bold mb-2">Supportive Environment</h4>
              <p className="text-sm text-muted-foreground">
                A community where every student is encouraged to thrive and achieve their potential
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Academics;
