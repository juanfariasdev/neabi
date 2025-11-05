import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-[80vh] md:h-screen min-h-[600px] w-full flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="font-headline text-[40px] md:text-[64px] font-bold leading-tight tracking-tight text-[#f8f7f4]">
          Educação Antirracista, Valorização e Transformação Social
        </h1>
        <p className="mt-6 text-base md:text-xl leading-8 text-[#D4AF37] font-body">
          Conheça o Núcleo de Estudos Afro-Brasileiros e Indígenas
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="font-accent font-bold bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#D4AF37]/90 px-8 py-3.5 rounded-sm">
            <Link href="#">Conheça Nossos Programas</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-accent font-bold border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] px-8 py-3.5 rounded-sm">
            <Link href="#">Saiba Mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
