import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholderColor?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderColor = '#f3f4f6',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Create intersection observer to detect when the image is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    // Get the current container ref
    const container = document.getElementById(`lazy-image-container-${src.replace(/[^\w\s]/gi, '')}`);
    if (container) {
      observer.observe(container);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [src]);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div
      id={`lazy-image-container-${src.replace(/[^\w\s]/gi, '')}`}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, backgroundColor: placeholderColor }}
    >
      {isInView && (
        <>
          <motion.img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;