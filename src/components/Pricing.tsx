import React from 'react';
import { Check, HelpCircle, Shield, Clock, Zap } from 'lucide-react';

const features = [
  'Real-time Energy Monitoring',
  'AI-powered Load Optimization',
  'Mobile App Access',
  '24/7 Technical Support',
  'Automated Reports & Analytics',
  'Predictive Maintenance Alerts'
];

const additionalBenefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: '1:1 Replacement Warranty',
    description: 'Complete coverage for hardware issues'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Free Installation',
    description: 'Professional setup included'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Everything you need to optimize your energy consumption</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Standard Package</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-white">₹50,000</span>
                <span className="text-gray-400 ml-2">per device</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 
                hover:from-emerald-400 hover:to-teal-400 text-white py-3 rounded-lg 
                font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25 
                flex items-center justify-center gap-2">
                Get Started <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <div className="text-emerald-400 mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400">
                * 18% Annual Maintenance Contract applies after the first year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}