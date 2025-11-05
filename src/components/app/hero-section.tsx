import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
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
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Educational Transformation Through Equity and Resistance
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200 md:text-xl font-body">
          NEABI is dedicated to celebrating African and Indigenous cultures, promoting antiracist education, and building a more just and inclusive society.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="font-accent font-bold bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#">Discover Our Programs</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-accent font-bold border-white text-white hover:bg-white/10">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
