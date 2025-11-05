'use client';

import BlogSection from '@/components/app/blog-section';
import ContactSection from '@/components/app/contact-section';
import EducationalResources from '@/components/app/educational-resources-section';
import EventsSection from '@/components/app/events-section';
import Footer from '@/components/app/footer';
import Header from '@/components/app/header';
import HeroSection from '@/components/app/hero-section';
import NewsletterSection from '@/components/app/newsletter-section';
import PillarsSection from '@/components/app/pillars-section';
import ProgramsCarousel from '@/components/app/programs-carousel';
import StatsSection from '@/components/app/stats-section';
import TestimonialsSection from '@/components/app/testimonials-section';
import WelcomeSection from '@/components/app/welcome-section';
import WhatNeabiDoes from '@/components/app/what-neabi-does';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WelcomeSection />
        <PillarsSection />
        <StatsSection />
        <WhatNeabiDoes />
        <ProgramsCarousel />
        <TestimonialsSection />
        <EducationalResources />
        <BlogSection />
        <EventsSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
