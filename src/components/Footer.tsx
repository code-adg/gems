import React from 'react';
import { Leaf, Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <section id="footer">
        <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold">Green Fusion</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing energy management through IoT and AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:info@greenfusion.com" className="hover:text-emerald-400 transition-colors">
                  info@gfiotsolutions.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+919876543210" className="hover:text-emerald-400 transition-colors">
                  +91 9951012333
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+919876543210" className="hover:text-emerald-400 transition-colors">
                  +91 9398633736
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Bhimavaram, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a href="https://instagram.com" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Instagram className="w-5 h-5" />
              <span>@greenfusion</span>
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About Team</h3>
            <p className="text-gray-400">
              Our team of experts combines deep industry knowledge with cutting-edge 
              technology expertise to deliver innovative energy solutions.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © 2024 Green Fusion IoT Solutions. All Rights Reserved.
        </div>
      </div>
      
    </footer>
    </section>
  );
}