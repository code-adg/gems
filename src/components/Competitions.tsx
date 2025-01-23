import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const competitions = [
  {
    title: "Innovation in Manufacturing Practices 2024, NITW",
    image: "/nitw.jpg",
    award: "Winner",
    description: "Recognized for breakthrough IoT technology in industrial energy optimization"
  },
  {
    title: "Tie Grad 2024",
    image: "/tiegrad.jpg",
    award: "Winner",
    description: "Selected among 500+ global cleantech startups for innovative energy solutions"
  },
  {
    title: "Spark Tank 2024, VITB",
    image: "/sparktank.jpg",
    award: "Winner",
    description: "Awarded for contribution to sustainable urban development"
  },
  {
    title: "GNIT Hackathon 2024",
    image: "gnit.jpg",
    award: "Second Runner-Up",
    description: "Awarded for contribution to sustainable urban development"
  },
  {
    title: "Tech and Innovation Fair 2025, IITM",
    image: "/iitm.jpg",
    award: "Runner-Up",
    description: "Awarded for contribution to sustainable urban development"
  }
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for our innovative solutions in energy management and sustainability
          </p>
        </div>

        {/* Horizontal Scrolling Section */}
        <div className="relative overflow-hidden">
          <div className="scroll-container flex space-x-6">
            {competitions.map((competition, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                  flex-none w-72 border border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    {index % 3 === 0 ? (
                      <Trophy className="w-8 h-8 text-yellow-400" />
                    ) : index % 3 === 1 ? (
                      <Award className="w-8 h-8 text-blue-400" />
                    ) : (
                      <Star className="w-8 h-8 text-emerald-400" />
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{competition.title}</h3>
                  <p className="text-emerald-400 font-semibold mb-3">{competition.award}</p>
                  <p className="text-gray-400 text-sm">{competition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for scrolling animation */}
      <style>{`
        .scroll-container {
          display: flex;
        }

        /* Infinite scroll for desktop view */
        @media (min-width: 768px) {
          .scroll-container {
            animation: scroll 20s linear infinite;
          }

          /* Pause animation on hover */
          .scroll-container:hover {
            animation-play-state: paused;
          }
        }

        /* Scrollable cards for mobile view */
        @media (max-width: 768px) {
          .scroll-container {
            overflow-x: auto;
            animation: none;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
