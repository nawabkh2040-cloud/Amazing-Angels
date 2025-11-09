import React, { useState, useEffect } from 'react';
import { Wifi, BookOpen, Laptop, Bed, Bus, Trophy, Shield, Coffee, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Facilities = () => {
  const [activeImage, setActiveImage] = useState(0);

  const schoolImages = [
    "/facilities.png",
    "/facilities1.png",
    "/facilities2.png"
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % schoolImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Wifi, title: "Campus-Wide High-Speed Wi-Fi", desc: "Reliable gigabit internet across all academic and residential areas." },
    { icon: BookOpen, title: "Smart Interactive Classrooms", desc: "Equipped with digital boards, projectors, and collaborative tools." },
    { icon: Laptop, title: "Advanced Computer & Science Labs", desc: "State-of-the-art labs for coding, robotics, and scientific research." },
    { icon: Bed, title: "Secure & Comfortable Hostels", desc: "Well-maintained dormitories with study spaces and 24/7 support." },
    { icon: Bus, title: "Safe & Punctual Transport", desc: "GPS-tracked buses with trained drivers and real-time updates." },
    { icon: Trophy, title: "Comprehensive Sports Facilities", desc: "Playgrounds, courts, and coaching for cricket, football, and athletics." },
  ];

  const highlights = [
    { icon: Shield, text: "Round-the-Clock Security" },
    { icon: Coffee, text: "Hygienic Dining Hall" },
    { icon: Star, text: "Highly Qualified Faculty" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2">
            Our Infrastructure
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Designed to support academic excellence, personal growth, and holistic development.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Left Column */}
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>

          {/* Center: Image Gallery */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Main Image */}
              <div className="relative rounded-2xl mb-5 overflow-hidden shadow-xl bg-white">
                <img
                  src={schoolImages[activeImage]}
                  alt="School Facility"
                  className="w-full h-80 lg:h-96 object-cover "
                />
                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">Modern Learning Environment</p>
                  <p className="text-blue-200 text-sm">Safe • Inspiring • Future-Ready</p>
                </div> */}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-5 justify-center">
                {schoolImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === i
                        ? 'border-blue-600 shadow-md'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img src={schoolImages[i]} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              {/* <button
                onClick={() => setActiveImage((prev) => (prev - 1 + schoolImages.length) % schoolImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => setActiveImage((prev) => (prev + 1) % schoolImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button> */}

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  key={activeImage}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-blue-600"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.slice(3, 6).map((feature, i) => (
              <FeatureCard key={i + 3} {...feature} delay={(i + 3) * 0.1} />
            ))}
          </div>
        </div>

        {/* Bottom Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium text-sm shadow-sm"
            >
              <item.icon className="w-5 h-5 text-blue-600" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Professional Card
const FeatureCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Facilities;