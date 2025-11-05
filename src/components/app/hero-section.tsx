import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section id="hero-section" className="relative h-[80vh] md:h-screen min-h-[600px] w-full flex flex-col items-center justify-center text-center">
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
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          Educação Antirracista, Valorização e Transformação Social
        </h1>
        <p className="mt-6 text-lg md:text-2xl leading-8 text-primary font-body max-w-3xl">
          Conheça o Núcleo de Estudos Afro-Brasileiros e Indígenas
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="font-accent font-semibold">
            <Link href="#">Conheça Nossos Programas</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-accent font-semibold border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground">
            <Link href="#">Saiba Mais</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
