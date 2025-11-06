'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import LogoImg from '@/assets/logo.png';
import Image from 'next/image';

const navLinks = [
  { name: 'Início', href: '#hero-section' },
  { name: 'Sobre', href: '#welcome-section' },
  { name: 'Pilares', href: '#pillars-section' },
  { name: 'Impacto', href: '#stats-section' },
  { name: 'Histórico', href: '#history-timeline-section' },
  { name: 'Contato', href: '#contact-section' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {

    const observers: IntersectionObserver[] = [];
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, options);

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-3xl font-bold font-headline text-foreground flex items-center gap-2 h-10">
            <Image src={LogoImg.src} alt="NEABI Logo" width={55} height={49} className='w-auto h-full' />
            NEABI
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-accent text-sm font-bold transition-colors",
                  activeSection === link.href
                    ? 'text-primary underline'
                    : 'text-foreground hover:text-primary'
                )}
                aria-current={activeSection === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-0">
                <div className="flex h-full flex-col">
                  <SheetTitle>
                    <div className="flex items-center justify-between p-6 border-b">
                      <Link href="/" className="text-2xl font-bold font-headline text-foreground flex items-center gap-2 h-10">
                        <Image src={LogoImg.src} alt="NEABI Logo" width={55} height={49} className='w-auto h-full' />
                        NEABI
                      </Link>
                    </div>
                  </SheetTitle>
                  <nav className="flex flex-col space-y-4 p-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "font-accent text-lg font-bold transition-colors py-2",
                          activeSection === link.href ? 'text-primary underline' : 'text-foreground hover:text-primary'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={activeSection === link.href ? 'page' : undefined}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
