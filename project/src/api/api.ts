import axios from 'axios';
import { ApiResponse, PageContent, ServiceContent, ProjectContent, TestimonialContent } from '../types/content';

// Replace with your actual Bolt CMS API URL
const API_BASE_URL = 'https://api.example.com';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic fetch function for any content type
async function fetchContent<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.get<ApiResponse<T>>(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

// Pages API
export const pagesApi = {
  getAll: () => fetchContent<PageContent[]>('/pages'),
  getBySlug: (slug: string) => fetchContent<PageContent>(`/pages/${slug}`),
  getHomePage: () => fetchContent<PageContent>('/pages/home'),
};

// Services API
export const servicesApi = {
  getAll: () => fetchContent<ServiceContent[]>('/services'),
  getBySlug: (slug: string) => fetchContent<ServiceContent>(`/services/${slug}`),
  getFeatured: () => fetchContent<ServiceContent[]>('/services', { featured: true }),
};

// Projects API
export const projectsApi = {
  getAll: (page = 1, limit = 10) => 
    fetchContent<ProjectContent[]>('/projects', { page, limit }),
  getBySlug: (slug: string) => 
    fetchContent<ProjectContent>(`/projects/${slug}`),
  getFeatured: () => 
    fetchContent<ProjectContent[]>('/projects', { featured: true }),
};

// Testimonials API
export const testimonialsApi = {
  getAll: () => fetchContent<TestimonialContent[]>('/testimonials'),
  getFeatured: () => fetchContent<TestimonialContent[]>('/testimonials', { featured: true }),
};

// Contact form submission
export const submitContactForm = async (formData: Record<string, any>) => {
  try {
    const response = await apiClient.post('/contact-form', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};