import React, { useState, useEffect } from 'react';

export default function SchoolSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero1.png",
      title: "Welcome to Our School",
      description: "Empowering young minds to reach their full potential through quality education and holistic development."
    },
    {
      image: "https://media.istockphoto.com/id/950609678/photo/elementary-girl-at-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=OmwwnFxCEgiTz7osPPwjvH3ffj2D6UCP429xTmww1Wc=",
      title: "Excellence in Education",
      description: "State-of-the-art facilities and experienced faculty dedicated to nurturing future leaders and innovators."
    },
    {
      image: "https://media.istockphoto.com/id/1375909098/photo/happy-kid-with-cardboard-rocket-on-back-with-space-universe-and-planets-doodle-drawing-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kw9kfy0Cj0kN1SmkjTTVdGQu7d_3Jb3BRtM02CeIu4E=",
      title: "Building Tomorrow's Future",
      description: "A vibrant learning community where every student is encouraged to dream big and achieve their goals."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Text Content - Left Side */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
              <div className="max-w-full sm:max-w-xl md:max-w-2xl text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base md:text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
  Learn More
</button>

              </div>
            </div>
          </div>
        </div>
      ))}



      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-5 sm:w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}