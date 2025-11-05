'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

const navLinks = [
  { name: 'Início', href: '#hero-section' },
  { name: 'Sobre', href: '#welcome-section' },
  { name: 'Programas', href: '#programs-carousel' },
  { name: 'Pesquisa', href: '#educational-resources' },
  { name: 'Eventos', href: '#events-section' },
  { name: 'Blog', href: '#blog-section' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-cream-bg/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <Link href="#" className="text-3xl font-bold font-headline text-gold">
            NEABI
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-accent text-sm font-bold text-dark-bg hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden lg:inline-flex text-dark-bg hover:bg-gold/10 hover:text-gold">
              <Search className="h-5 w-5" />
              <span className="sr-only">Pesquisar</span>
            </Button>
            
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-dark-bg">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-cream-bg p-0">
                   <div className="flex h-full flex-col">
                     <div className="flex items-center justify-between p-6 border-b">
                        <Link href="#" className="text-2xl font-bold font-headline text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                          NEABI
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Fechar menu</span>
                        </Button>
                     </div>
                    <nav className="flex flex-col space-y-4 p-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="font-accent text-lg font-bold text-dark-bg hover:text-gold transition-colors py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                     <div className="mt-auto p-6 border-t">
                        <div className="relative w-full">
                            <Input placeholder="Pesquisar..." className="pl-10 h-11 bg-white" />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-mid" />
                        </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}