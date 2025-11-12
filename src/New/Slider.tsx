import React, { useState, useEffect } from 'react';

export default function SchoolSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Welcome to Our School",
      description:
        "Empowering young minds to reach their full potential through quality education and holistic development.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661963297627-92799f5658fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHMlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Excellence in Education",
      description:
        "State-of-the-art facilities and experienced faculty dedicated to nurturing future leaders and innovators.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1637195141546-2469a5312504?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
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
    <div className="relative h-40 lg:h-80 w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Text Content – CENTERED & CURSIVE */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
              {/* Title – Cursive */}
              <h1
                className="font-cursive italic text-2xl leading-tight font-bold mb-2
                           sm:text-3xl sm:mb-3
                           md:text-4xl md:mb-4
                           lg:text-5xl lg:mb-5
                           xl:text-6xl xl:mb-6"
              >
                {slide.title}
              </h1>

              {/* Description – Cursive */}
              <p
                className="font-cursive italic  text-xs leading-relaxed mb-4
                           sm:text-base sm:mb-5
                           md:text-lg md:mb-6
                           lg:text-xl lg:mb-7
                           xl:text-2xl xl:mb-8"
              >
                {slide.description}
              </p>

              {/* Uncomment if you want a button */}
              {/* <button className="...">Learn More</button> */}
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