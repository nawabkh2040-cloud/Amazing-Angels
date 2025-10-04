import { Computer, Library, Palette, Trophy } from 'lucide-react';
import { Card } from './ui/card';

const Facilities = () => {
  const facilities = [
    {
      icon: Computer,
      title: 'Computer Lab',
      description: 'Equipped with cutting-edge technology, providing students with hands-on experience in various applications. A hub for interactive learning, coding exercises, and research.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Library,
      title: 'Library',
      description: 'A treasure trove of knowledge with an extensive collection of books covering various genres and subjects. A haven for avid readers and independent research.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Palette,
      title: 'Art Classes',
      description: 'Specialized sessions designed to unleash artistic potential within each student. Explore various mediums and forms of expression, encouraging creativity and imagination.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Trophy,
      title: 'Sports Ground',
      description: 'Spacious area for various sporting activities. From team sports that instill camaraderie to individual pursuits promoting physical fitness and well-being.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2400 sq ft campus designed to enhance every aspect of student's educational journey
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${facility.color}`} />
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${facility.color} rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Campus Info */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Modern Infrastructure</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our school boasts a modern and well-maintained infrastructure that creates an inviting 
              atmosphere for learning. From well-lit classrooms to spacious common areas, we prioritize 
              the comfort and well-being of our students. Every facility is crafted to enrich the 
              educational experience and inspire curiosity, exploration, and overall growth.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Facilities;
