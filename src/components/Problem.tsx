import React from 'react';
import { AlertTriangle, BatteryLow, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
    title: 'High Power Penalties',
    description: 'Excessive costs due to exceeding power limits'
  },
  {
    icon: <BatteryLow className="w-8 h-8 text-orange-400" />,
    title: 'Low Power Factor',
    description: 'Reduced efficiency leading to higher operational costs'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
    title: 'Energy Waste',
    description: 'Unnecessary energy consumption during non-peak hours'
  }
];

export default function Problem() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Common Energy Management Challenges
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}