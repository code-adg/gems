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
    <div className="relative w-[600px] h-auto max-w-2xl mx-auto">
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
        <div className="absolute inset-0 flex flex-col justify-between items-center text-white p-4">
          {/* Heading Animation */}
          <h2 className="text-2xl font-bold text-center bg-black bg-opacity-50 px-4 py-2 rounded animate-slideDown">
            Our Achievements
          </h2>

          {/* Achievement Info Animation */}
          <p className="text-lg font-medium text-center bg-black bg-opacity-50 px-4 py-2 rounded animate-slideUp">
            {achievements[currentIndex]}
          </p>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 focus:outline-none"
      >
        &#8594;
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
