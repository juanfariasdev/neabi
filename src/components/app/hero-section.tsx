import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

import BannerImg from '@/assets/banner.png';

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative w-full h-screen md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-fixed bg-right-bottom"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.65), rgba(26, 26, 26, 0.65)), url(${BannerImg.src})`
        }}
      />

      <div className="relative z-10 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warm-white mb-6 leading-tight tracking-tight">
          Educação Antirracista, Valorização e Transformação Social
        </h1>
        <p className="font-sans text-lg md:text-xl text-gold mb-12 leading-relaxed max-w-2xl mx-auto">
          Conheça o Núcleo de Estudos Afro-Brasileiros e Indígenas
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            asChild
            className="w-full sm:w-auto bg-gold text-deep-black font-heading font-bold py-4 px-8 rounded-md transition-all duration-smooth hover:bg-opacity-90 active:scale-95 shadow-md hover:shadow-lg text-base md:text-lg"
          >
            <Link href="#programas">
              Conheça Nossos Programas
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-2 border-gold text-gold bg-transparent font-heading font-bold py-4 px-8 rounded-md transition-all duration-smooth hover:bg-gold hover:text-deep-black shadow-md hover:shadow-lg text-base md:text-lg"
          >
            <Link href="#welcome-section">
              Saiba Mais
            </Link>
          </Button>
        </div>
      </div>

      {/* Animated Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-6 h-6 text-gold animate-bounce" strokeWidth={2} />
      </div>
    </section>
  );
}
