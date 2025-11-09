import React, { useState, useEffect } from 'react';

export default function SchoolSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero1.png",
      title: "Welcome to Our School",
      description:
        "Empowering young minds to reach their full potential through quality education and holistic development.",
    },
    {
      image:
        "https://media.istockphoto.com/id/950609678/photo/elementary-girl-at-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=OmwwnFxCEgiTz7osPPwjvH3ffj2D6UCP429xTmww1Wc=",
      title: "Excellence in Education",
      description:
        "State-of-the-art facilities and experienced faculty dedicated to nurturing future leaders and innovators.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1375909098/photo/happy-kid-with-cardboard-rocket-on-back-with-space-universe-and-planets-doodle-drawing-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kw9kfy0Cj0kN1SmkjTTVdGQu7d_3Jb3BRtM02CeIu4E=",
      title: "Building Tomorrow's Future",
      description:
        "A vibrant learning community where every student is encouraged to dream big and achieve their goals.",
    },
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
    <div className="relative h-[40vh] lg:h-screen  w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image – now height follows parent */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />

          {/* Text Content – Left Side */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
              <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-white">
                {/* Title */}
                <h1 className="text-2xl leading-tight font-bold mb-2
                               sm:text-3xl sm:mb-3
                               md:text-4xl md:mb-4
                               lg:text-5xl lg:mb-5
                               xl:text-6xl xl:mb-6">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-xs leading-relaxed mb-4
                              sm:text-base sm:mb-5
                              md:text-lg md:mb-6
                              lg:text-xl lg:mb-7
                              xl:text-2xl xl:mb-8">
                  {slide.description}
                </p>

                {/* Button */}
                {/* <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold
                             px-4 py-2 text-sm rounded-lg shadow-md hover:shadow-lg
                             transition-all duration-300
                             sm:px-5 sm:py-2.5 sm:text-base
                             md:px-6 md:py-3 md:text-lg
                             lg:px-7 lg:py-3.5 lg:text-xl"
                >
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10
                      sm:bottom-6 sm:space-x-3
                      md:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300
                        sm:h-3 sm:w-3
                        ${i === currentSlide
                          ? "bg-white w-5 sm:w-8"
                          : "bg-white bg-opacity-50 hover:bg-opacity-75"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}