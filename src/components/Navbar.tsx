import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { label: 'Our Product', id: 'products' },
  { label: 'Team', id: 'team' },
  {
    label: 'More',
    children: [
      { label: 'Competitions', id: 'competitions' },
      { label: 'Testimonials', id: 'testimonials' }
    ]
  },
  { label: 'Contact Us', id: 'footer' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-emerald-600 
                      transition-colors font-medium peer">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 w-48 invisible group-hover:visible opacity-0 
                      group-hover:opacity-100 transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.id)}
                            className="block w-full text-left px-4 py-2 text-gray-600 
                              hover:text-emerald-600 hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-gray-600 hover:text-emerald-600 transition-colors font-medium
                      ${item.label === 'Get Started' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105' : ''}`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="group">
                    <button
                      className="flex items-center justify-between w-full py-3 px-4 text-gray-600"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform" />
                    </button>
                    <div className="hidden group-hover:block bg-gray-50">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.id)}
                          className="block w-full text-left py-2 px-8 text-gray-600 
                            hover:text-emerald-600 transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left py-3 px-4 text-gray-600 hover:text-emerald-600 
                      hover:bg-gray-50 transition-colors font-medium
                      ${item.label === 'Get Started' ? 'text-emerald-600' : ''}`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}