import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
import { HardHat, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for couldn't be found."
      />
      
      <div className="min-h-screen flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-lg">
          <motion.div
            className="flex justify-center mb-8 text-orange-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <HardHat size={120} />
          </motion.div>
          
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>
          
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Oops! The page you're looking for seems to be under construction. 
            Let's get you back to our homepage.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button to="/" icon={<Home size={18} />} iconPosition="left">
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;