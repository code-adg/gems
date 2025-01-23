import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ProductShowcase from './components/ProductShowcase';
import Team from './components/Team';
import GetStarted from './components/GetStarted';
import Competitions from './components/Competitions';
import Testimonials from './components/Testimonials';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Problem />
      <ProductShowcase />
      <Team />
      <GetStarted />
      <Competitions />
      <Testimonials />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;