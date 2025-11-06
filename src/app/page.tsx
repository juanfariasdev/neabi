'use client';

import ContactSection from '@/components/app/contact-section';
import Footer from '@/components/app/footer';
import HeroSection from '@/components/app/hero-section';
import HistoryTimelineSection from '@/components/app/history-timeline-section';
import NewsletterSection from '@/components/app/newsletter-section';
import PillarsSection from '@/components/app/pillars-section';
import PoetrySection from '@/components/app/poetry-section';
import QuickContactCards from '@/components/app/quick-contact-cards';
import StatsSection from '@/components/app/stats-section';
import WelcomeSection from '@/components/app/welcome-section';
import WhatNeabiDoes from '@/components/app/what-neabi-does';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <HeroSection />
        <WelcomeSection />
        <QuickContactCards />
        <PillarsSection />
        <StatsSection />
        <WhatNeabiDoes />
        <HistoryTimelineSection />
        <PoetrySection />
        {/* TODO: Add AboutSection here */}
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
