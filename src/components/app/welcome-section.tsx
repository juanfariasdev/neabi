import Image from "next/image";
import Link from "next/link";
import { Award, Globe, Group, HeartHandshake, History, School, Users, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./section-header";

import AboutImg from '@/assets/about.jpeg';

const keyPoints = [
  {
    icon: <School className="h-8 w-8 text-primary" />,
    text: "Educação para a valorização da diversidade cultural.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    text: "Construção de uma sociedade mais justa e equitativa.",
  },
  {
    icon: <History className="h-8 w-8 text-primary" />,
    text: "Pesquisa e extensão comunitária como pilares.",
  },
];

export default function WelcomeSection() {

  return (
    <section id="welcome-section" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            {AboutImg && (
              <Image
                src={AboutImg.src}
                alt="Imagem representativa do NEABI, mostrando diversidade e inclusão"
                width={600}
                height={450}
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg"
              />
            )}
          </div>
          <div className="max-w-2xl">
            <SectionHeader
              title="Bem-vindo ao NEABI"
              subtitle="Transformando a Educação Brasileira"
              subtitleClassName="text-primary font-bold"
              className="items-start text-left block mb-4"
              titleClassName="text-3xl md:text-4xl"
            />
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8" style={{ lineHeight: 1.8 }}>
              O NEABI é um núcleo dedicado à valorização das identidades negra e indígena através da educação, pesquisa e extensão. Com 66 anos de história e mais de 100 núcleos espalhados pelo Brasil, trabalhamos para superar discriminação, promover igualdade e fortalecer a convivência com a diversidade.
            </p>
            <div className="mt-8 space-y-6">
              {keyPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-4">
                  {point.icon}
                  <span className="font-medium text-base text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
            {/* <div className="mt-4">
               <Link 
              href="/sobre" 
              className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold py-2 px-4 rounded-md transition-all duration-smooth hover:bg-opacity-90"
            >
              Explore NEABI
            </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
