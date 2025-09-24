import React from 'react';
import { StaggerTestimonials } from './ui/stagger-testimonials';
import { SectionTitle } from './LandingSections';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <SectionTitle>Testimonials</SectionTitle>
      <StaggerTestimonials />
    </section>
  );
};
