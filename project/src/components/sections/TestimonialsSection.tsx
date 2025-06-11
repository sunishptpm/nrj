import React from 'react';
import { motion } from 'framer-motion';
import type { TestimonialContent } from '../../types/content';

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: TestimonialContent[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section className="section bg-navy-800 py-20 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{
  testimonial: TestimonialContent;
  index: number;
}> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-navy-700 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* Quote icon */}
      <div className="mb-4 text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M11.9999 10.4999C11.9999 12.1568 10.6568 13.4999 8.99994 13.4999C7.34308 13.4999 5.99994 12.1568 5.99994 10.4999C5.99994 8.84305 7.34308 7.49991 8.99994 7.49991C10.6568 7.49991 11.9999 8.84305 11.9999 10.4999Z" />
          <path d="M17.9999 10.4999C17.9999 12.1568 16.6568 13.4999 14.9999 13.4999C13.3431 13.4999 11.9999 12.1568 11.9999 10.4999C11.9999 8.84305 13.3431 7.49991 14.9999 7.49991C16.6568 7.49991 17.9999 8.84305 17.9999 10.4999Z" />
          <path d="M5.99994 13.4999V15.9999C5.99994 16.5522 6.44766 16.9999 6.99994 16.9999H10.9999C11.5522 16.9999 11.9999 16.5522 11.9999 15.9999V13.4999H5.99994Z" />
          <path d="M11.9999 13.4999V15.9999C11.9999 16.5522 12.4476 16.9999 12.9999 16.9999H16.9999C17.5522 16.9999 17.9999 16.5522 17.9999 15.9999V13.4999H11.9999Z" />
        </svg>
      </div>
      
      {/* Content */}
      <p className="text-gray-200 mb-6 italic">
        {testimonial.content}
      </p>
      
      {/* Stars - based on rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              i < (testimonial.rating || 5) ? 'text-orange-500' : 'text-gray-400'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Client */}
      <div className="flex items-center">
        {testimonial.client_photo ? (
          <img
            src={testimonial.client_photo.url}
            alt={testimonial.client_name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-navy-600 flex items-center justify-center mr-4">
            <span className="text-white font-medium">
              {testimonial.client_name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-bold text-white">{testimonial.client_name}</p>
          {testimonial.client_company && (
            <p className="text-gray-300 text-sm">{testimonial.client_company}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;