import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageUrl,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-900/70 z-10"></div>
        <motion.img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 py-20 md:py-0">
        <div className="max-w-3xl">
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="text-gray-200 text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button to={primaryCta.link} size="lg">
              {primaryCta.text}
            </Button>
            
            {secondaryCta && (
              <Button to={secondaryCta.link} variant="outline" size="lg">
                {secondaryCta.text}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;