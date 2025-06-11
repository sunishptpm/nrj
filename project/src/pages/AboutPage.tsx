import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import CtaSection from '../components/sections/CtaSection';
import { Building, Award, Users, Clock, CheckSquare, Settings } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nicholas Roberts',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'With over 25 years in the construction industry, Nicholas founded NRJ Builders with a vision to deliver excellence in every project.'
    },
    {
      name: 'Rachel Jones',
      position: 'Head of Surveying',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'A chartered surveyor with expertise in residential and commercial property assessment, Rachel leads our surveying department.'
    },
    {
      name: 'James Wilson',
      position: 'Construction Manager',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'James oversees all construction projects, ensuring quality standards and timelines are met with precision.'
    },
  ];
  
  const stats = [
    { value: '25+', label: 'Years Experience', icon: <Clock size={32} /> },
    { value: '500+', label: 'Projects Completed', icon: <CheckSquare size={32} /> },
    { value: '150+', label: 'Happy Clients', icon: <Users size={32} /> },
    { value: '20+', label: 'Industry Awards', icon: <Award size={32} /> },
  ];
  
  const values = [
    { 
      title: 'Quality', 
      description: 'We maintain the highest standards in all aspects of our work, from materials to craftsmanship.',
      icon: <CheckSquare className="text-orange-500\" size={48} />
    },
    { 
      title: 'Integrity', 
      description: 'Honesty and transparency guide our business practices and client relationships.',
      icon: <Award className="text-orange-500" size={48} />
    },
    { 
      title: 'Innovation', 
      description: 'We embrace new techniques and technologies to deliver cutting-edge solutions.',
      icon: <Settings className="text-orange-500\" size={48} />
    },
    { 
      title: 'Reliability', 
      description: 'Our clients can depend on us to deliver projects on time and within budget.',
      icon: <Building className="text-orange-500" size={48} />
    },
  ];
  
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about NRJ Builders & Surveyors, our history, our team, and the values that drive our success in construction and surveying."
        image="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-navy-900/10 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About NRJ Builders & Surveyors
            </motion.h1>
            
            <motion.div
              className="w-20 h-2 bg-orange-500 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            <motion.p
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Founded in 1995, NRJ Builders & Surveyors has grown into one of the UK's most trusted construction and surveying companies, delivering excellence in every project.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-orange-500 mb-8"></div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  NRJ Builders & Surveyors was founded by Nicholas Roberts in 1995 with a vision to create a construction company that prioritized quality, innovation, and client satisfaction above all else.
                </p>
                <p>
                  What began as a small residential construction service has expanded into a full-service construction and surveying company, handling projects ranging from luxury home builds to large commercial developments and specialized surveying services.
                </p>
                <p>
                  Over the past 25+ years, we've built a reputation for excellence, developing long-standing relationships with clients, suppliers, and partners across the UK. Our team has grown to include the finest craftspeople, surveyors, project managers, and support staff in the industry.
                </p>
                <p>
                  Today, we continue to evolve while staying true to our founding principles of quality, integrity, and innovation in everything we do.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg"
                alt="NRJ Builders Team"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">25+</p>
                <p className="uppercase font-medium">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-4 text-orange-500">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-navy-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Leadership Team
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The experts behind our success
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection
        title="Ready to Work With Us?"
        subtitle="Contact our team today to discuss your project needs and how we can help"
        primaryCta={{
          text: "Get in Touch",
          link: "/contact"
        }}
        secondaryCta={{
          text: "View Our Services",
          link: "/services"
        }}
      />
    </>
  );
};

export default AboutPage;