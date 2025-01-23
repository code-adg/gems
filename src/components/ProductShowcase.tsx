import React from 'react';
import { Activity, Zap, Shield, Cpu, LineChart, Clock, Brain, Gauge } from 'lucide-react';

const products = [
  {
    title: 'Smart Energy Meter',
    description: 'Industrial-grade IoT device with real-time monitoring capabilities',
    image: '/Picture1.png',
    features: ['High precision sensors', 'WiFi/4G connectivity', 'Real-time data streaming']
  },
  {
    title: 'Load Optimizer',
    description: 'AI-powered load management system for peak efficiency',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    features: ['Predictive analytics', 'Automated load balancing', 'Custom thresholds']
  }
];

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-emerald-400" />,
    title: 'Real-time Monitoring',
    description: '24/7 energy consumption tracking and alerts'
  },
  {
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
    title: 'AI-Powered Predictions',
    description: 'Predictive analytics for load optimization'
  },
  {
    icon: <Gauge className="w-6 h-6 text-emerald-400" />,
    title: 'Performance Metrics',
    description: 'Comprehensive energy efficiency analytics'
  },
  {
    icon: <LineChart className="w-6 h-6 text-emerald-400" />,
    title: 'Cost Reduction',
    description: 'Up to 30% reduction in energy costs'
  }
];

const features = [
  { icon: <Activity className="w-6 h-6" />, label: 'Real-time Monitoring' },
  { icon: <Zap className="w-6 h-6" />, label: 'Power Factor Correction' },
  { icon: <Shield className="w-6 h-6" />, label: 'Surge Protection' },
  { icon: <Cpu className="w-6 h-6" />, label: 'Smart Processing' }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Product</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 transform hover:scale-[1.02] transition-transform">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl border border-gray-700
                  transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} 
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center group hover:bg-emerald-600 
                transition-colors border border-gray-700">
              <div className="mb-4 text-emerald-400 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <p className="font-semibold text-white">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}