import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Principal = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Principal's Message
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
              alt="Principal"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Quote className="w-12 h-12 text-primary/40" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Amazing Angels Public School! As Principal, I am honored to lead an institution 
              dedicated to nurturing young minds and building character. Our commitment to academic excellence 
              is matched only by our dedication to holistic development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe every child is unique and has the potential to excel. Through our experienced faculty, 
              modern facilities, and values-based education, we create an environment where students thrive 
              academically, socially, and emotionally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us in our mission to empower minds and enrich lives. Together, we will prepare your child 
              for a bright and successful future.
            </p>
            <div className="pt-4">
              <p className="font-bold text-xl text-foreground">Mrs. Priya Sharma</p>
              <p className="text-primary">Principal, AAPS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
