import Image from "next/image";
import Link from "next/link";
import { Award, Globe, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyPoints = [
  {
    icon: <Award className="h-8 w-8 text-gold" />,
    text: "66 anos de história",
  },
  {
    icon: <Globe className="h-8 w-8 text-gold" />,
    text: "100+ núcleos no Brasil",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-gold" />,
    text: "Promoção da Igualdade",
  },
];

export default function WelcomeSection() {
  const welcomeImage = PlaceHolderImages.find((img) => img.id === "welcome-community");

  return (
    <section id="welcome-section" className="bg-cream-bg py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            {welcomeImage && (
              <Image
                src={welcomeImage.imageUrl}
                alt={welcomeImage.description}
                width={600}
                height={450}
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-md"
                data-ai-hint={welcomeImage.imageHint}
              />
            )}
          </div>
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-dark-bg mb-6 leading-tight">
              Bem-vindo ao NEABI
            </h2>
            <p className="font-accent mt-4 text-lg font-bold text-gold md:text-xl mb-8">
              Transformando a Educação Brasileira
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-8" style={{ lineHeight: 1.8 }}>
              O NEABI é um núcleo dedicado à valorização das identidades negra e indígena através da educação, pesquisa e extensão. Com 66 anos de história e mais de 100 núcleos espalhados pelo Brasil, trabalhamos para superar discriminação, promover igualdade e fortalecer a convivência com a diversidade.
            </p>
            <div className="mt-8 space-y-6">
              {keyPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-4">
                  {point.icon}
                  <span className="font-medium text-base text-dark-bg">{point.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild className="font-accent font-semibold bg-gold text-dark-bg hover:bg-gold/90 transition-all duration-200 h-auto px-6 py-3 rounded text-base">
                <Link href="#">Explore NEABI</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
