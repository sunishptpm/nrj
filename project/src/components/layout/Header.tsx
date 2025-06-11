import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Hammer, HardHat } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'Building Construction', path: '/services/building-construction' },
      { name: 'Surveying', path: '/services/surveying' },
      { name: 'Renovations', path: '/services/renovations' },
      { name: 'Consulting', path: '/services/consulting' },
    ]
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll for transparent to solid header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-orange-500 flex items-center">
            <Hammer size={32} className="mr-1" />
            <HardHat size={28} />
          </div>
          <span className={`font-bold text-2xl ${isScrolled ? 'text-navy-800' : 'text-white'}`}>
            NRJ <span className="text-orange-500">Builders</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <div className="flex items-center cursor-pointer">
                  <span 
                    className={`font-medium ${
                      isScrolled ? 'text-navy-800 hover:text-orange-500' : 'text-white hover:text-orange-300'
                    } transition-colors`}
                  >
                    {item.name}
                  </span>
                  <ChevronDown className={`ml-1 w-4 h-4 ${
                    isScrolled ? 'text-navy-800' : 'text-white'
                  }`} />
                  
                  {/* Desktop Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-3 text-navy-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`font-medium ${
                    location.pathname === item.path ? 'text-orange-500' : 
                    (isScrolled ? 'text-navy-800 hover:text-orange-500' : 'text-white hover:text-orange-300')
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-navy-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-navy-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={isMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container-custom py-4">
          {navItems.map((item) => (
            <div key={item.name} className="py-2">
              {item.dropdown ? (
                <div>
                  <div
                    className="flex items-center justify-between py-2"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="font-medium text-navy-800">{item.name}</span>
                    <ChevronDown className={`w-5 h-5 transform transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <motion.div
                    className="pl-4 space-y-2 overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ 
                      height: activeDropdown === item.name ? 'auto' : 0,
                      opacity: activeDropdown === item.name ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block py-2 text-gray-600 hover:text-orange-500"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`block py-2 ${
                    location.pathname === item.path ? 'text-orange-500 font-medium' : 'text-navy-800'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn btn-primary w-full text-center mt-4">
            Get a Quote
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;