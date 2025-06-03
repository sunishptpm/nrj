import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../../api/api';

interface ContactSectionProps {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  address,
  phone,
  email,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      setFormStatus({ submitted: true, success: false, message: 'Sending your message...' });
      
      // Call API to submit form
      // In a real implementation, this would connect to the Bolt CMS API
      // For this demo, we'll simulate a successful submission
      // await submitContactForm(formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again.',
      });
    }
  };
  
  return (
    <section className="section py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-gray-600 text-lg mb-8">{subtitle}</p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <MapPin className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Our Address</h4>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Phone className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Phone</h4>
                  <a href={`tel:${phone}`} className="text-gray-600 hover:text-orange-500 transition-colors">
                    {phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Mail className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 mb-1">Email</h4>
                  <a href={`mailto:${email}`} className="text-gray-600 hover:text-orange-500 transition-colors">
                    {email}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Map or static map image */}
            <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
              <img
                src="https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Location map"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {formStatus && (
                <div className={`mb-6 p-4 rounded-md ${
                  formStatus.success ? 'bg-success-50 text-success-900' : 'bg-error-50 text-error-900'
                }`}>
                  <div className="flex items-center">
                    {formStatus.success ? (
                      <CheckCircle className="mr-2 flex-shrink-0\" size={20} />
                    ) : (
                      <AlertCircle className="mr-2 flex-shrink-0" size={20} />
                    )}
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.name ? 'border-error-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-300`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-error-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.email ? 'border-error-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-300`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-error-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Quote">Project Quote</option>
                      <option value="Surveying Services">Surveying Services</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.message ? 'border-error-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange-300`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="text-error-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  icon={<Send size={18} />}
                  iconPosition="right"
                  disabled={formStatus?.submitted && !formStatus?.success}
                >
                  {formStatus?.submitted && !formStatus?.success
                    ? 'Sending...'
                    : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;