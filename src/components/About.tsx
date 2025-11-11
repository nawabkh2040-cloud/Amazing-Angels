import { Building2, Users, Trophy, Heart } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: Building2,
      title: 'Established 2017',
      description: 'From 30 to 300+ students',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Dedicated & experienced',
    },
    {
      icon: Trophy,
      title: 'MP Board Affiliated',
      description: 'State recognized excellence',
    },
    {
      icon: Heart,
      title: 'Holistic Approach',
      description: 'Beyond academics',
    },
  ];

  return (
    <section id="about" className="pt-10 lg:pt-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center  mb-6 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 lg:mb-4">
            About <span className="text-primary">Amazing Angels</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A beacon of educational excellence in Khajrana, Indore
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 lg:p-8 rounded-2xl">
              <div className="bg-card p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-2 lg:mb-4 text-primary">Our Origin & Growth</h3>
                <p className="text-muted-foreground md:text-sm text-xs lg:text-base mb-2 lg:mb-4">
                  Established in 2017, Amazing Angels Public School has evolved into a vibrant 
                  community of 300 students, growing from a humble start with just 30 learners.
                </p>
                <p className="text-muted-foreground md:text-sm text-xs lg:text-base mb-2 lg:mb-4">
                  Operating under the esteemed management of Al Raza Memorial Educational Society, 
                  we take pride in our affiliation with the Madhya Pradesh School Board of Education, 
                  Bhopal, and our recognition by the Government of Madhya Pradesh.
                </p>
                <p className="text-muted-foreground md:text-sm text-xs lg:text-base">
                  Our dedication to excellence is reflected in our adherence to the curriculum and 
                  educational principles sanctioned by the state board, ensuring a holistic and 
                  well-rounded educational experience for every student.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <h3 className="text-3xl text-gray-800 font-bold mb-3 lg:mb-6">Academic Distinction</h3>
            <p className="text-sm lg:text-xl md:text-base text-muted-foreground mb-3 lg:mb-6">
              At the heart of our institution is a commitment to academic excellence. Our curriculum 
              is designed to ignite curiosity, promote critical thinking, and foster a love for learning.
            </p>
            <p className="text-sm lg:text-xl md:text-base text-muted-foreground mb-3 lg:mb-6">
              We provide top-tier English medium education in a dynamic learning environment that 
              nurtures both academic prowess and personal growth. Our dedicated and experienced 
              faculty members ensure that students receive quality education, reflected in our 
              consistent <span className="font-bold text-primary">100% board exam results</span>.
            </p>
            <p className=" text-sm lg:text-xl md:text-base text-muted-foreground">
              Our 2400 sq ft campus boasts state-of-the-art facilities, including a well-equipped 
              computer lab, library, and dedicated spaces for art and sports. We believe in a 
              holistic approach to education, incorporating a range of activities to inspire 
              innovation and overall development.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-1 lg:p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-primary"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2 lg:mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
