import { Trophy, Users2, Lightbulb, DollarSign, BookOpen, Heart, Crown } from 'lucide-react';
import { Card } from './ui/card';

const Goals = () => {
  const goals = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Ensure a robust curriculum and teaching methodology that consistently delivers outstanding results, maintaining our tradition of 100% board exam success.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Users2,
      title: 'Holistic Development',
      description: 'Prioritize overall development by providing state-of-the-art facilities including computer lab, library, and dedicated spaces for art and sports.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Activities',
      description: 'Encourage a culture of innovation through various activities including sports, cultural events, and innovative projects to stimulate critical thinking.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: DollarSign,
      title: 'Accessible Quality Education',
      description: 'Maintain an economic fee structure to ensure that quality education is accessible to a diverse range of students, promoting inclusivity.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: BookOpen,
      title: 'Professional Development',
      description: 'Invest in continuous training and development of teaching staff, ensuring they remain at the forefront of educational practices.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      title: 'Community Engagement',
      description: 'Establish strong ties with parents, guardians, and the local community, fostering a collaborative and supportive environment.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Crown,
      title: 'Leadership in Education',
      description: 'Strive to be recognized as a leader in education in Khajrana, Indore, and beyond, continually adapting to emerging trends.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section id="goals" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Goals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seven pillars guiding our commitment to educational excellence
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-primary group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${goal.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                <goal.icon className={`h-7 w-7 ${goal.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
