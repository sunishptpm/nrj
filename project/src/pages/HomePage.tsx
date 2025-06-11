import React, { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';
import { pagesApi, servicesApi, projectsApi, testimonialsApi } from '../api/api';
import { PageContent, ServiceContent, ProjectContent, TestimonialContent } from '../types/content';

const HomePage: React.FC = () => {
  // For a real implementation, these would be fetched from the Bolt CMS API
  // For this demo, we'll use mock data
  
  const [pageData, setPageData] = useState<Partial<PageContent>>({
    title: 'NRJ Builders & Surveyors',
    description: 'Expert construction and surveying services with a focus on quality and precision',
    meta_title: 'NRJ Builders & Surveyors | Expert Construction & Surveying Services',
    meta_description: 'Professional building, renovation and surveying services delivered with precision and excellence. Contact us for your next project.',
  });
  
  const [services, setServices] = useState<Partial<ServiceContent>[]>([
    {
      id: 1,
      title: 'Building Construction',
      description: 'Full-service building construction for residential and commercial projects with quality craftsmanship.',
      slug: 'building-construction',
      icon: 'Building',
      image: {
        url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        alt: 'Building Construction',
        width: 800,
        height: 600,
        id: 1,
        mime_type: 'image/jpeg'
      }
    },
    {
      id: 2,
      title: 'Surveying Services',
      description: 'Comprehensive surveying services including land, building, and structural surveys with detailed reports.',
      slug: 'surveying-services',
      icon: 'Ruler',
      image: {
        url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg',
        alt: 'Surveying Services',
        width: 800,
        height: 600,
        id: 2,
        mime_type: 'image/jpeg'
      }
    },
    {
      id: 3,
      title: 'Renovations',
      description: 'Transform your space with our expert renovation services for kitchens, bathrooms, and whole-home remodels.',
      slug: 'renovations',
      icon: 'Hammer',
      image: {
        url: 'https://images.pexels.com/photos/2284235/pexels-photo-2284235.jpeg',
        alt: 'Renovations',
        width: 800,
        height: 600,
        id: 3,
        mime_type: 'image/jpeg'
      }
    },
  ]);
  
  const [projects, setProjects] = useState<Partial<ProjectContent>[]>([
    {
      id: 1,
      title: 'Modern Office Complex',
      description: 'A state-of-the-art office complex featuring sustainable design and cutting-edge amenities.',
      slug: 'modern-office-complex',
      location: 'London, UK',
      completion_date: '2023-06-15',
      images: [
        {
          url: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
          alt: 'Modern Office Complex',
          width: 800,
          height: 600,
          id: 4,
          mime_type: 'image/jpeg'
        }
      ]
    },
    {
      id: 2,
      title: 'Luxury Residential Development',
      description: 'Premium housing development with custom-designed homes and community amenities.',
      slug: 'luxury-residential-development',
      location: 'Manchester, UK',
      completion_date: '2023-04-10',
      images: [
        {
          url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
          alt: 'Luxury Residential Development',
          width: 800,
          height: 600,
          id: 5,
          mime_type: 'image/jpeg'
        }
      ]
    },
    {
      id: 3,
      title: 'Historic Building Restoration',
      description: 'Careful restoration of a 19th-century building, preserving historical features while modernizing utilities.',
      slug: 'historic-building-restoration',
      location: 'Edinburgh, UK',
      completion_date: '2022-11-30',
      images: [
        {
          url: 'https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg',
          alt: 'Historic Building Restoration',
          width: 800,
          height: 600,
          id: 6,
          mime_type: 'image/jpeg'
        }
      ]
    },
  ]);
  
  const [testimonials, setTestimonials] = useState<TestimonialContent[]>([
    {
      id: 1,
      client_name: 'Sarah Johnson',
      client_company: 'Johnson Properties',
      content: 'NRJ Builders transformed our office space with exceptional attention to detail. Their team was professional, punctual, and delivered beyond our expectations.',
      rating: 5,
      created_at: '2023-05-10',
      updated_at: '2023-05-10'
    },
    {
      id: 2,
      client_name: 'Michael Brown',
      client_company: 'Brown Family Trust',
      content: 'We hired NRJ for our home renovation and couldn\'t be happier with the results. Their craftsmanship is excellent, and they stayed within budget and timeline.',
      rating: 5,
      created_at: '2023-03-22',
      updated_at: '2023-03-22'
    },
    {
      id: 3,
      client_name: 'Emma Wilson',
      client_company: 'Wilson Commercial Ltd',
      content: 'Their surveying team provided comprehensive reports that helped us make informed decisions for our commercial property purchase. Highly recommended.',
      rating: 4,
      created_at: '2023-06-05',
      updated_at: '2023-06-05'
    },
  ]);
  
  // In a real implementation, these would be fetch calls to the Bolt CMS API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const homePageData = await pagesApi.getHomePage();
  //       const servicesData = await servicesApi.getFeatured();
  //       const projectsData = await projectsApi.getFeatured();
  //       const testimonialsData = await testimonialsApi.getFeatured();
  //       
  //       setPageData(homePageData.data);
  //       setServices(servicesData.data);
  //       setProjects(projectsData.data);
  //       setTestimonials(testimonialsData.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   
  //   fetchData();
  // }, []);
  
  return (
    <>
      <SEO
        title="Expert Construction & Surveying Services"
        description="Professional building, renovation and surveying services delivered with precision and excellence. Contact us for your next project."
        image="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
      />
      
      <HeroSection
        title="Building Excellence, Surveying with Precision"
        subtitle="Your trusted partner for quality construction and comprehensive surveying services"
        imageUrl="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
        primaryCta={{
          text: "Get a Quote",
          link: "/contact"
        }}
        secondaryCta={{
          text: "View Our Projects",
          link: "/projects"
        }}
      />
      
      <ServicesSection
        title="Our Services"
        subtitle="Comprehensive construction and surveying solutions tailored to your needs"
        services={services}
      />
      
      <CtaSection
        title="Quality Construction Starts Here"
        subtitle="Ready to start your project? Contact our team for a free consultation and quote"
        primaryCta={{
          text: "Contact Us",
          link: "/contact"
        }}
        secondaryCta={{
          text: "Learn More",
          link: "/about"
        }}
        backgroundImage="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg"
      />
      
      <ProjectsSection
        title="Featured Projects"
        subtitle="Explore our recent work and see the quality we deliver"
        projects={projects}
      />
      
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from our satisfied clients"
        testimonials={testimonials}
      />
    </>
  );
};

export default HomePage;