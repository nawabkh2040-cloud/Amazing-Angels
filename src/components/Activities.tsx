import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const Activities = () => {
  const activities = [
    {
      title: 'Sports Activities',
      description: 'We recognize the integral role sports play in fostering physical fitness, teamwork, and a competitive spirit. Our robust sports program encompasses various disciplines.',
      image: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Innovative Activities',
      description: 'Innovation is at the heart of our educational philosophy. We nurture creativity and critical thinking through activities that go beyond traditional curriculum.',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=600&fit=crop',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Cultural Activities',
      description: 'Diversity and cultural richness are embraced. Our cultural activities provide a platform for students to appreciate and celebrate traditions.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Celebrations',
      description: 'Celebrating significant events and national milestones is integral to our school calendar. Republic Day, Independence Day, Youth Day observed with enthusiasm.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Science & Technology',
      description: 'Hands-on science experiments, robotics, and coding workshops that spark curiosity and foster innovation in young minds.',
      image: 'https://images.unsplash.com/photo-1567168539593-59673ababaae?w=800&h=600&fit=crop',
      color: 'from-red-500 to-rose-500',
    },
    {
      title: 'Arts & Music',
      description: 'Creative expression through painting, dance, music, and drama helps students discover and nurture their artistic talents.',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  return (
    <section id="activities" className="py-10 lg:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center  mb-6 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Student Activities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A vibrant ecosystem of sports, innovation, culture, and celebrations
          </p>
        </motion.div>

        {/* Activities Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold mb-3 transform group-hover:translate-y-[-10px] transition-transform">
                          {activity.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </motion.div>

        {/* Activity Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Regular Competitions',
              description: 'Inter-house tournaments and competitions encourage sportsmanship and healthy competition',
            },
            {
              title: 'Creative Expression',
              description: 'Multiple platforms for students to showcase their talents and artistic abilities',
            },
            {
              title: 'Cultural Diversity',
              description: 'Celebrations embracing various traditions and festivals throughout the year',
            },
          ].map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <h4 className="text-xl font-bold mb-3 text-primary">{highlight.title}</h4>
              <p className="text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
