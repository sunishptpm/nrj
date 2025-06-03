import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import ContactSection from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with NRJ Builders & Surveyors. Contact us for quotes, inquiries, or to discuss your project needs."
        image="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg"
      />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-50">
        <div className="container-custom">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          
          <motion.div
            className="w-20 h-2 bg-orange-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          
          <motion.p
            className="text-xl text-gray-700 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We're here to answer any questions you have about our services. Reach out to us and we'll respond as soon as we can.
          </motion.p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactSection
        title="Get in Touch"
        subtitle="Have a question or want to discuss your project? Fill out the form below or contact us directly."
        address="123 Construction Avenue, Building District, London, UK"
        phone="+44 123 456 7890"
        email="info@nrjbuilders.com"
      />
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find quick answers to common questions about our services
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
};

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = React.useState<number | null>(0);
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const faqItems = [
    {
      question: 'What areas do you serve?',
      answer: 'We provide construction and surveying services throughout the UK, with a primary focus on London, Manchester, Birmingham, and Edinburgh. For projects in other locations, please contact us to discuss availability.'
    },
    {
      question: 'How do I request a quote for my project?',
      answer: 'You can request a quote by filling out our contact form, calling us directly, or sending an email with details about your project. We typically respond within 24-48 hours to schedule a consultation or site visit for accurate estimation.'
    },
    {
      question: 'What types of projects do you handle?',
      answer: 'We handle a wide range of projects including new residential constructions, commercial buildings, renovations, extensions, and specialized surveying services. Our team has expertise in both small-scale and large-scale projects.'
    },
    {
      question: 'How long does a typical building project take?',
      answer: 'Project timelines vary significantly based on scope, complexity, and size. A small renovation might take 4-8 weeks, while a new building construction could take 6-12 months. We provide detailed timelines during the quotation process.'
    },
    {
      question: 'Do you provide warranties for your work?',
      answer: 'Yes, we provide warranties for all our construction work. Typically, we offer a 1-year warranty on labor and workmanship, while materials are covered by manufacturer warranties. Extended warranties are available for certain types of projects.'
    },
  ];
  
  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-lg">{item.question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${openItem === index ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: openItem === index ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactPage;