import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const Facilities = () => {
  const facilities = [
    {
      title: 'Computer Lab',
      description: 'Equipped with cutting-edge technology, providing students with hands-on experience in various applications. A hub for interactive learning, coding exercises, and research.',
      image: 'https://images.unsplash.com/photo-1719159381981-1327b22aff9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBsYWJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
    },
    {
      title: 'Library',
      description: 'A treasure trove of knowledge with an extensive collection of books covering various genres and subjects. A haven for avid readers and independent research.',
      image: 'https://media.istockphoto.com/id/2168307181/photo/the-bookshelf-in-the-library-is-filled-with-bookshelves.webp?a=1&b=1&s=612x612&w=0&k=20&c=TRx6R5W074bbKiHGhQFNG7cXS3GTcsWUeXSf9bkcNII=',
    },
    {
      title: 'Art Classes',
      description: 'Specialized sessions designed to unleash artistic potential within each student. Explore various mediums and forms of expression, encouraging creativity and imagination.',
      image: 'https://plus.unsplash.com/premium_photo-1705882850471-adc694c55036?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0JTIwY2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
    },
    {
      title: 'Sports Ground',
      description: 'Spacious area for various sporting activities. From team sports that instill camaraderie to individual pursuits promoting physical fitness and well-being.',
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="facilities" className="py-10 lg:py-20 bg-gradient-to-br from-background via-muted/10 to-background">
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
              World-Class Facilities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2400 sq ft campus designed to enhance every aspect of student's educational journey
          </p>
        </motion.div>

        {/* Facilities Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {facilities.map((facility, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">{facility.title}</h3>
                        <p className="text-white/90 text-lg leading-relaxed">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>

        {/* Campus Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-card p-8 rounded-2xl shadow-xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Modern Infrastructure</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our school boasts a modern and well-maintained infrastructure that creates an inviting 
              atmosphere for learning. From well-lit classrooms to spacious common areas, we prioritize 
              the comfort and well-being of our students. Every facility is crafted to enrich the 
              educational experience and inspire curiosity, exploration, and overall growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
