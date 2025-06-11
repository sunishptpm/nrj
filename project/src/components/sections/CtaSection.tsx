import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  backgroundImage?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
}) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image or Color */}
      {backgroundImage ? (
        <>
          <div className="absolute inset-0 bg-navy-900/80 z-10"></div>
          <img
            src={backgroundImage}
            alt="CTA background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-900"></div>
      )}
      
      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
    </section>
  );
};

export default CtaSection;