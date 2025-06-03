import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { ServiceContent } from '../../types/content';

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: Partial<ServiceContent>[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  title, 
  subtitle, 
  services 
}) => {
  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id || index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ 
  service: Partial<ServiceContent>;
  index: number;
}> = ({ service, index }) => {
  // Import Lucide icon dynamically (mock implementation)
  const IconComponent = (props: any) => {
    const iconName = service.icon || 'Hammer';
    // In a real implementation, you would dynamically import the icon
    // This is a simplified example
    return <span className="text-orange-500" {...props}>{iconName}</span>;
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {service.image && (
        <img 
          src={service.image.url} 
          alt={service.image.alt || service.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-orange-100 p-3 rounded-lg mr-4">
            <IconComponent size={24} />
          </div>
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          {service.description}
        </p>
        
        <Link 
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
        >
          Learn More
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesSection;