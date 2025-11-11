import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Principal = () => {
  return (
    <section className="py-16 md:py-10 lg:py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-800">
              Principal's{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-700 bg-clip-text text-transparent">
                Message
              </span>
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group mx-auto md:mx-0 max-w-sm md:max-w-none"
          >
            {/* Blur Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl scale-95 opacity-70 group-hover:opacity-100 transition-all duration-500 -z-10" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Principal"
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/40" />
            
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              Welcome to Amazing Angels Public School! As Principal, I am honored to lead an institution 
              dedicated to nurturing young minds and building character. Our commitment to academic excellence 
              is matched only by our dedication to holistic development.
            </p>
            
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              We believe every child is unique and has the potential to excel. Through our experienced faculty, 
              modern facilities, and values-based education, we create an environment where students thrive 
              academically, socially, and emotionally.
            </p>
            
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              Join us in our mission to empower minds and enrich lives. Together, we will prepare your child 
              for a bright and successful future.
            </p>
            
            <div className="pt-0 lg:pt-4">
              <p className="font-bold text-lg md:text-xl text-foreground">Mrs. Priya Sharma</p>
              <p className="text-primary text-sm md:text-base">Principal, AAPS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Principal;