import React from 'react';
import { LineChart, Clock, Brain, Gauge } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-green-600" />,
    title: 'Real-time Monitoring',
    description: '24/7 energy consumption tracking and alerts'
  },
  {
    icon: <Brain className="w-6 h-6 text-green-600" />,
    title: 'AI-Powered Predictions',
    description: 'Predictive analytics for load optimization'
  },
  {
    icon: <Gauge className="w-6 h-6 text-green-600" />,
    title: 'Performance Metrics',
    description: 'Comprehensive energy efficiency analytics'
  },
  {
    icon: <LineChart className="w-6 h-6 text-green-600" />,
    title: 'Cost Reduction',
    description: 'Up to 30% reduction in energy costs'
  }
];

export default function Solution() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Green Fusion Energy Management System (GEMS)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive solution combines IoT sensors with advanced AI/ML algorithms 
            to optimize your energy consumption and reduce operational costs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow
                transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}