import React, { useState } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      videoId: "dQw4w9WgXcQ", // Example YouTube video ID
      text: "Mukesh Singh, President - Sales at Kalpataru, shares how his family benefited from the #CareerReady initiative.",
    },
    {
      id: 2,
      videoId: "6Q0AazVu1Tc", // Different YouTube video ID
      text: "Sarah Thompson, HR Director, discusses the impact of our training programs on employee growth and development.",
    },
    {
      id: 3,
      videoId: "M7lc1UVf-VE", // Another YouTube video ID
      text: "John Davis explains how the mentorship program transformed his team's productivity and collaboration.",
    },
    // Add more testimonials as needed
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Testimonials
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
        Trend-setting corporates across the country are already making a real,
        impactful difference in the lives of employees and their families.
        Here's what their experience has been like:
      </p>

      <div className="relative">
        {/* Previous Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-6xl text-blue-300 hover:text-blue-400 z-10"
          onClick={handlePrevSlide}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <div className="flex rounded-2xl overflow-hidden shadow-xl">
          {/* Video Section */}
          <div className="w-1/2 relative bg-black">
            <iframe
              key={testimonials[currentSlide].videoId} // Force iframe refresh on slide change
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${testimonials[currentSlide].videoId}?rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text Section */}
          <div className="w-1/2 bg-[#6366f1] p-8 flex items-center">
            <p className="text-white text-xl">
              {testimonials[currentSlide].text}
            </p>
          </div>
        </div>

        {/* Next Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-6xl text-blue-300 hover:text-blue-400 z-10"
          onClick={handleNextSlide}
          aria-label="Next testimonial"
        >
          ›
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentSlide === index}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
