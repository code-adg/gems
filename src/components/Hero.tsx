import { useState } from 'react';
import { ArrowRight, Check, Clock, HelpCircle, PlayCircle, Shield, X, Zap } from 'lucide-react';
import { scrollTo } from '../utils/scrollTo';
import CustomCarousel from './HeroCarousel';

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

function Modal({ isOpen, onClose, children }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-700 w-full max-w-4xl p-6 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-gray-100">{children}</div>
      </div>
    </div>
  );
}


export default function Hero() {
  const [isPricingModalOpen, setPricingModalOpen] = useState(false);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-gradient-radial from-emerald-500/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-teal-500/20 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 py-32 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Intelligent Energy Solutions</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Save Energy,
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Save Money
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Revolutionizing industrial energy consumption through IoT and AI-powered 
              solutions. Save up to 10% on energy costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('footer')}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 
                  hover:to-teal-400 text-white px-8 py-4 rounded-lg font-semibold transition-all 
                  hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 flex items-center gap-2"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setVideoModalOpen(true)} // Open video modal
                className="bg-gray-800/80 backdrop-blur-sm text-gray-100 px-8 py-4 rounded-lg 
                  font-semibold hover:bg-gray-700 transition-all hover:shadow-lg border border-gray-700
                  flex items-center gap-2"
              >
                Watch Video <PlayCircle className="w-5 h-5 text-emerald-400" />
              </button>

            </div>
            <div className="flex gap-8 pt-8">
              {[
                { value: '10%', label: 'Energy Savings' },
                { value: '24/7', label: 'Monitoring' }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-gray-700">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <div>
            <button
                onClick={() => setPricingModalOpen(true)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-xl shadow-lg font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
            <CustomCarousel/>
          </div>
        </div>
      </div>

      <Modal isOpen={isVideoModalOpen} onClose={() => setVideoModalOpen(false)}>
        <div className="relative">
          <iframe
            src="https://www.youtube.com/embed/H-GiB9QKsdw"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-[calc(100vh-100px)] rounded-lg shadow-lg"
          >
            Your browser does not support the iframe tag.
          </iframe>
        </div>
      </Modal>



      {/* Pricing Modal */}
      <Modal isOpen={isPricingModalOpen} onClose={() => setPricingModalOpen(false)}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-300">
            Everything you need to optimize your energy consumption
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Standard Package</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-emerald-400">₹50,000</span>
                <span className="text-gray-400 ml-2">per device</span>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setPricingModalOpen(false);
                  scrollTo('contact');
                }}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 
                  hover:from-emerald-500 hover:to-teal-500 text-white py-3 rounded-lg 
                  font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Get Started <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="text-emerald-500 mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
            <div className="bg-gray-700 p-6 rounded-xl">
              <p className="text-sm text-gray-400">
                * 18% Annual Maintenance Contract applies after the first year
              </p>
            </div>
          </div>
        </div>
  </Modal>

    </div>
  );
}