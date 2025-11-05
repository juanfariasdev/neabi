import Header from '@/components/app/header';
import HeroSection from '@/components/app/hero-section';
import PillarsSection from '@/components/app/pillars-section';
import StatsSection from '@/components/app/stats-section';
import ProgramsCarousel from '@/components/app/programs-carousel';
import TestimonialsSection from '@/components/app/testimonials-section';
import CtaSection from '@/components/app/cta-section';
import Footer from '@/components/app/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PillarsSection />
        <StatsSection />
        <ProgramsCarousel />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
