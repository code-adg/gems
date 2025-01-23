import React from 'react';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';

const steps = [
  {
    icon: <Clock className="w-6 h-6 text-emerald-400" />,
    title: 'Schedule Demo',
    description: 'See our solution in action with a personalized demo'
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    title: 'Quick Setup',
    description: 'Professional installation within 48 hours'
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: 'Start Saving',
    description: 'Begin optimizing your energy consumption immediately'
  }
];

export default function GetStarted() {
  const handleScheduleDemo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = contactSection.querySelector('input');
      if (firstInput) {
        firstInput.focus();
      }
    }
  };

  return (
    <section id="get-started" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Optimize Your Energy?</h2>
          <p className="text-xl text-gray-300">
            Get started with Green Fusion in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-700
                transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={handleScheduleDemo}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 
              hover:from-emerald-400 hover:to-teal-400 text-white px-10 py-4 
              rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25
              hover:scale-105 inline-flex items-center gap-2 text-lg"
          >
            Schedule Your Demo <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}