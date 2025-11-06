import Image from "next/image";
import Link from "next/link";
import { PenTool } from "lucide-react";

export default function PoetrySection() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-deep-blue to-forest-green">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-lg transform rotate-6"></div>
              <Image
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=500&fit=crop"
                alt="Mulheres negras de diferentes gerações - avó, mãe, filha - em harmonia e força"
                width={500}
                height={500}
                className="relative w-full rounded-lg shadow-xl object-cover aspect-square"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gold mb-4 leading-tight">
              Vozes-Mulheres
            </h2>
            <p className="font-sans text-lg text-warm-white/90 mb-8 leading-relaxed">
              Um poema que ecoa através das gerações, celebrando as vozes silenciadas e encontrando liberdade na ressonância de quem veio antes.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="text-warm-white/80 leading-relaxed font-sans italic text-sm md:text-base">
                <p className="mb-4">
                  A voz de minha bisavó<br/>
                  ecoou criança<br/>
                  nos porões do navio<br/>
                  ecoou lamentos<br/>
                  de uma infância perdida.
                </p>
                
                <p className="mb-4">
                  A voz de minha mãe<br/>
                  ecoou baixinho revolta<br/>
                  no fundo das cozinhas alheias
                </p>

                <p>
                  <em className="text-gold">
                    ...a voz de minha filha<br/>
                    recolhe todas as nossas vozes...
                  </em>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <PenTool className="h-8 w-8 text-gold" />
              <div>
                <p className="font-heading font-bold text-lg text-gold">Conceição Evaristo</p>
                <p className="font-sans text-sm text-warm-white/70">Poeta e escritora afro-brasileira</p>
              </div>
            </div>

            <Link 
              href="#poetry" 
              className="inline-flex items-center gap-2 bg-gold text-deep-black font-heading font-bold py-3 px-6 rounded-md transition-all duration-smooth hover:bg-opacity-90 active:scale-95 shadow-md hover:shadow-lg"
            >
              Ler Poema Completo
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
