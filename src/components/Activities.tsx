import { Trophy, Lightbulb, Music, PartyPopper } from 'lucide-react';
import { Card } from './ui/card';

const Activities = () => {
  const activities = [
    {
      icon: Trophy,
      title: 'Sports',
      description: 'We recognize the integral role sports play in fostering physical fitness, teamwork, and a competitive spirit. Our robust sports program encompasses various disciplines, with regular competitions and inter-house tournaments encouraging sportsmanship and healthy competition.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Activities',
      description: 'Innovation is at the heart of our educational philosophy. We nurture creativity and critical thinking skills through activities that go beyond traditional curriculum. From science fairs to project-based learning and technology-driven initiatives, we create an environment where curiosity thrives.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Music,
      title: 'Cultural Activities',
      description: 'Diversity and cultural richness are embraced at Amazing Angels. Our cultural activities provide a platform for students to appreciate and celebrate traditions. From festivals to dance and music performances, students showcase their talents and learn about the rich heritage around them.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: PartyPopper,
      title: 'Celebrations',
      description: 'Celebrating significant events and national milestones is integral to our school calendar. Republic Day, Independence Day, Youth Day, and other celebrations are observed with enthusiasm and patriotic fervor, fostering unity and patriotism among our students.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Student <span className="text-primary">Activities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A vibrant ecosystem of sports, innovation, culture, and celebrations
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className={`p-8 bg-gradient-to-br ${activity.gradient}`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/30 rounded-xl group-hover:scale-110 transition-transform">
                      <activity.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{activity.title}</h3>
                  </div>
                  <p className="leading-relaxed">{activity.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
