import { useState, useEffect } from "react";

const carouselImages = [
  "/gems-hero2.png",
  "/nitw.jpg",
  "/tiegrad.jpg", // Replace with your actual image paths
  "/sparktank.jpg",
  "/gnit.jpg",
  "/iitm.jpg",
];

const achievements = [
  "", // No achievement for the first slide
  "Winner at Innovation in Manufacturing Practices 2024, NITW",
  "Winner at Tie Grad 2024",
  "Winner at Spark Tank 2024, VITB",
  "Second Runner-Up at GNIT Hackathon 2024",
  "Runner-Up at Tech and Innovation Fair 2025, IITM",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-auto max-w-2xl mx-auto sm:w-[600px]">
      {/* Carousel Images */}
      <div className="overflow-hidden rounded-lg relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Fixed Text Overlay */}
      {currentIndex > 0 && (
        <div className="absolute inset-0 flex flex-col justify-between items-center text-white p-2 sm:p-4">
          {/* Heading Animation */}
          <h2 className="text-lg sm:text-2xl font-bold text-center bg-black bg-opacity-50 px-2 sm:px-4 py-1 sm:py-2 rounded animate-slideDown">
            Our Achievements
          </h2>

          {/* Achievement Info Animation */}
          <p className="text-sm sm:text-lg font-medium text-center bg-black bg-opacity-50 px-2 sm:px-4 py-1 sm:py-2 rounded animate-slideUp">
            {achievements[currentIndex]}
          </p>
        </div>
      )}

      {/* Navigation Arrows */}
      {/* Navigation Arrows */}
<button
  onClick={goToPrev}
  className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>
<button
  onClick={goToNext}
  className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gradient-to-l from-gray-700 to-gray-900 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>


      {/* Animations */}
      <style>{`
        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 0.8;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 0.8;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

