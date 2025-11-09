import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Principal from '@/components/Principal';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Target, Trophy } from 'lucide-react';
import Slider from '@/New/Slider';
import Vision from '@/New/Vision';
import WhyChooseUS from '@/New/WhyChoose';
import Faq from '@/New/Faq';
// import Facilities from '@/components/Facilities';
import Facilities from '@/New/Facilities';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="">
        <Slider />
        <ScrollProgress />

        {/* About Preview */}
        <section className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

      {/* Left: Image with Blue Border & Badge */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-8 ring-blue-100">
          <img
            src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?auto=format&fit=crop&q=80&w=900"
            alt="Amazing Angels Students"
            className="w-full h-full object-cover"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          100% Results
        </div>
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-7"
      >
        {/* Heading */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950">
            About
          </h2>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-600 -mt-3">
            Us
          </h2>
          <div className="h-1 w-24 bg-blue-600 mt-3 rounded-full"></div>
        </div>

        {/* Description */}
        <div className="space-y-5 text-lg text-blue-800 leading-relaxed font-medium">
          <p>
            <span className="text-blue-900 font-bold">Since 2017</span>, Amazing Angels Public School has been a trusted name in <span className="text-blue-700">quality English medium education</span> in Khajrana, Indore.
          </p>
          <p>
            Affiliated with <span className="font-semibold text-blue-700">MP State Board</span>, we proudly deliver <span className="font-bold text-blue-900">100% board exam success</span> — year after year.
          </p>
          <p>
            We don’t just teach — we <span className="italic text-blue-700">inspire growth</span> in academics, character, and confidence.
          </p>
        </div>

        {/* CTA Button */}
        <Link to="/about">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-9 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
          >
            Explore Our Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        {/* Mini Stats */}
        <div className="flex gap-6 pt-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-900">7+</p>
            <p className="text-sm text-blue-600 font-medium">Years</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-900">100%</p>
            <p className="text-sm text-blue-600 font-medium">Success</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-900">500+</p>
            <p className="text-sm text-blue-600 font-medium">Students</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
 {/* <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-800">
  Our Vision and {" "}
  <span className="bg-gradient-to-r from-blue-500 to-indigo-700 bg-clip-text text-transparent">

    Mission
  </span>
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
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
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
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing and inclusive learning environment that fosters academic excellence, 
                  critical thinking, and holistic development of every student.
                </p>
              </motion.div>
            </div>
          </div>
        </section> */}
        <WhyChooseUS/>
        <Facilities />
        <Vision />
        <Principal />

        {/* Achievements Counter */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
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
              <p className="text-white/80 text-lg">Building a legacy of excellence</p>
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
                <span className="text-gray-800">
                  Ready{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    to Join Us
                  </span>
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
        <Faq/>
        
      </div>
    </PageTransition>
  );
};

export default HomePage;
