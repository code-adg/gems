import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Radhakrishna Industries',
    quote: 'Green Fusion helped us reduce our energy costs by 25% within the first quarter.',
    author: 'Harsha (MD)',
  },
  {
    name: 'Coca Cola Manufacturing Unit',
    quote: 'Its a good technology which can help many large/medium scale industries. Looking forward to it.',
    author: 'Ravindra (Manager of Orbital)',
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Trusted by Industry Leaders</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
              <Quote className="w-8 h-8 text-emerald-400 mb-4" />
              <p className="text-lg mb-4 text-gray-300">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}