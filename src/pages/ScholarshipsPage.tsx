import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import Scholarships from '@/components/Scholarships';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ScholarshipsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    'Regular attendance is mandatory',
    'School uniform must be worn at all times',
    'Homework and assignments must be completed on time',
    'Respect teachers, staff, and fellow students',
    'Use of mobile phones is strictly prohibited during school hours',
    'Maintain cleanliness in classrooms and campus',
    'Follow safety guidelines in laboratories and playgrounds',
    'Be punctual for all classes and activities',
  ];

  const codeOfConduct = [
    'Demonstrate honesty and integrity in all activities',
    'Show courtesy and respect to everyone',
    'Take responsibility for personal belongings',
    'Report any bullying or harassment immediately',
    'Participate actively in class discussions',
    'Follow instructions from teachers and staff',
    'Maintain discipline during assemblies and events',
    'Use school property with care',
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <ScrollProgress />
        
        {/* Page Banner */}
        <section className="relative py-10 lg:py-20 bg-gradient-to-r from-primary via-accent to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=400&fit=crop')] opacity-20 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Scholarships & Rules</h1>
              <p className="text-xl text-white/90">Rewards for excellence and guidelines for discipline</p>
            </motion.div>
          </div>
        </section>

        <Scholarships />

        {/* Rules & Code of Conduct */}
        <section className="py-10 lg:py-10 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  School Rules & Code of Conduct
                </span>
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="rules" className="bg-card border border-border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                    <span className="text-xl font-semibold">School Rules & Discipline</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-3 mt-4">
                      {rules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="conduct" className="bg-card border border-border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                    <span className="text-xl font-semibold">Code of Conduct</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-3 mt-4">
                      {codeOfConduct.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ScholarshipsPage;
