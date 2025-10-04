import { Target, Compass, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';

const VisionMission = () => {
  const missions = [
    'Nurturing environment that fosters academic excellence and holistic development',
    'Values-driven education that shapes character',
    'Inspire passion for learning and curiosity',
    'Equip students with skills for an ever-evolving world',
    'Cultivate responsible, compassionate, resilient individuals',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Vision Card */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/20 rounded-full">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed">
            "Empowering Minds, Enriching Lives: Striving for Excellence in Education at Amazing Angels Public School."
          </p>
        </Card>

        {/* Mission Card */}
        <Card className="p-8 md:p-12 bg-card shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-accent/10 rounded-full">
              <Compass className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            At Amazing Angels Public School, our mission is to provide a nurturing environment that fosters 
            academic excellence, holistic development, and values-driven education.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="mt-1">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-sm">{mission}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VisionMission;
