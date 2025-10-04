import { Award, Trophy, Medal } from 'lucide-react';
import { Card } from './ui/card';

const Scholarships = () => {
  const awards = [
    {
      icon: Trophy,
      medal: 'Gold Medal',
      amount: '₹2,000',
      color: 'from-yellow-400 to-amber-500',
      textColor: 'text-yellow-600',
    },
    {
      icon: Award,
      medal: 'Silver Medal',
      amount: '₹1,500',
      color: 'from-gray-300 to-gray-400',
      textColor: 'text-gray-600',
    },
    {
      icon: Medal,
      medal: 'Bronze Medal',
      amount: '₹1,000',
      color: 'from-orange-400 to-amber-600',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Scholarships</span> & Medals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognizing excellence through the Begam Mehrunnisa Scholarship Program
          </p>
        </div>

        {/* Main Content */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Begam Mehrunnisa Scholarships</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Outstanding achievements deserve recognition. Every year, the top three students are 
              awarded prestigious medals along with scholarships, generously sponsored by the 
              Hazrat Mohammad Azam Charity Foundation.
            </p>
          </div>
        </Card>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className={`py-8 bg-gradient-to-br ${award.color}`}>
                <award.icon className="h-20 w-20 mx-auto text-white mb-4 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h4 className={`text-2xl font-bold mb-2 ${award.textColor}`}>{award.medal}</h4>
                <p className="text-3xl font-bold text-foreground mb-2">{award.amount}</p>
                <p className="text-sm text-muted-foreground">per annum</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Selection Criteria */}
        <Card className="p-8 bg-card shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Selection Criteria</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-bold mb-2">Academic Performance</h4>
              <p className="text-sm text-muted-foreground">
                Overall excellence in academic achievements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold mb-2">Active Participation</h4>
              <p className="text-sm text-muted-foreground">
                Involvement in extracurricular and co-curricular activities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-bold mb-2">Personal Conduct</h4>
              <p className="text-sm text-muted-foreground">
                Exemplary personal and social behavior
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Scholarships;
