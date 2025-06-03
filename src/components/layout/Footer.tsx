import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  HardHat, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-orange-500 flex items-center">
                <Hammer size={28} className="mr-1" />
                <HardHat size={24} />
              </div>
              <span className="font-bold text-xl ml-2">
                NRJ <span className="text-orange-500">Builders</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Building excellence and surveying with precision since 1995. 
              Your trusted partner for all construction and surveying needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Building Construction', 
                'Renovations', 
                'Surveying Services', 
                'Project Management', 
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <Link to={`/services/${service.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  123 Construction Avenue, Building District, London, UK
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <a href="tel:+441234567890" className="text-gray-300 hover:text-orange-400 transition-colors">
                  +44 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@nrjbuilders.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  info@nrjbuilders.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-700 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NRJ Builders & Surveyors. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;