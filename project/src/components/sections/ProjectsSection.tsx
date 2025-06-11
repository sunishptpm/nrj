import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ProjectContent } from '../../types/content';
import Button from '../ui/Button';

interface ProjectsSectionProps {
  title: string;
  subtitle: string;
  projects: Partial<ProjectContent>[];
  viewAllLink?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title,
  subtitle,
  projects,
  viewAllLink = '/projects',
}) => {
  return (
    <section className="section py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
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
          
          {viewAllLink && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button to={viewAllLink} variant="outline">
                View All Projects
              </Button>
            </motion.div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  project: Partial<ProjectContent>;
  index: number;
}> = ({ project, index }) => {
  // Get the first image from the project's images array
  const mainImage = project.images && project.images.length > 0
    ? project.images[0]
    : { url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg', alt: 'Project image' };
  
  return (
    <motion.div
      className="group overflow-hidden rounded-lg shadow-md bg-white h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Link to={`/projects/${project.slug}`} className="block relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/40 transition-colors z-10"></div>
        <motion.img
          src={mainImage.url}
          alt={mainImage.alt || project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">
          <Link to={`/projects/${project.slug}`} className="hover:text-orange-500 transition-colors">
            {project.title}
          </Link>
        </h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-4">{project.location}</span>
          {project.completion_date && (
            <span>Completed: {new Date(project.completion_date).toLocaleDateString()}</span>
          )}
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {project.description}
        </p>
        
        <Link
          to={`/projects/${project.slug}`}
          className="text-orange-500 font-medium hover:text-orange-600 transition-colors inline-flex items-center"
        >
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;