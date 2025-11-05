import Image from "next/image";
import Link from "next/link";
import { Award, Globe, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const keyPoints = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    text: "66 anos de história",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    text: "100+ núcleos no Brasil",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    text: "Promoção da Igualdade",
  },
];

export default function WelcomeSection() {
  const welcomeImage = PlaceHolderImages.find((img) => img.id === "welcome-community");

  return (
    <section className="relative bg-background py-16 md:py-20">
      <div
        className="absolute bottom-0 right-0 h-64 w-64 bg-repeat opacity-[0.02]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231a1a1a\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            {welcomeImage && (
              <Image
                src={welcomeImage.imageUrl}
                alt={welcomeImage.description}
                width={600}
                height={450}
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                data-ai-hint={welcomeImage.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
              Bem-vindo ao NEABI
            </h2>
            <p className="font-accent mt-4 text-lg font-bold text-primary md:text-xl">
              Transformando a Educação Brasileira
            </p>
            <p className="mt-8 text-base leading-relaxed text-foreground/80" style={{ lineHeight: 1.8 }}>
              O NEABI é um núcleo dedicado à valorização das identidades negra e indígena através da educação, pesquisa e extensão. Com 66 anos de história e mais de 100 núcleos espalhados pelo Brasil, trabalhamos para superar discriminação, promover igualdade e fortalecer a convivência com a diversidade.
            </p>
            <div className="mt-8 space-y-6">
              {keyPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-4">
                  {point.icon}
                  <span className="font-medium text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="font-accent font-bold bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-3">
                <Link href="#">Explore o NEABI</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
