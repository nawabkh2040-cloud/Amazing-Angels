import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Principal from '@/components/Principal';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Target, Trophy } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <ScrollProgress />

        {/* About Preview */}
        <section id="about-preview" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
                  alt="Students learning"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    About Us
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Established in 2017, Amazing Angels Public School is dedicated to providing quality 
                  English medium education in Khajrana, Indore. Affiliated with the MP State Board, 
                  we have achieved 100% board exam success through our commitment to academic excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We focus on holistic development, nurturing not just academic brilliance but also 
                  character, values, and life skills in every student.
                </p>
                <Link to="/about">
                  <Button size="lg" className="group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Preview */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Our Vision & Mission
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering Minds, Enriching Lives: Striving for Excellence in Education at Amazing Angels Public School.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing and inclusive learning environment that fosters academic excellence, 
                  critical thinking, and holistic development of every student.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Principal Section */}
        <Principal />

        {/* Achievements Counter */}
        <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Achievements
              </h2>
              <p className="text-white/90 text-lg">Building a legacy of excellence</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: <BookOpen className="w-12 h-12" />, value: '300+', label: 'Happy Students' },
                { icon: <Trophy className="w-12 h-12" />, value: '100%', label: 'Board Success Rate' },
                { icon: <Target className="w-12 h-12" />, value: '2400', label: 'Sq Ft Campus' },
                { icon: <Trophy className="w-12 h-12" />, value: '7+', label: 'Years of Excellence' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Ready to Join Us?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Give your child the best education and a bright future at Amazing Angels Public School
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/admissions">
                  <Button size="lg" className="text-lg px-10 py-7">
                    Apply for Admission
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-7">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;
