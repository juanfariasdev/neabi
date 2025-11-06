import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FlaskConical, GraduationCap, Handshake, Network, Search, Users } from "lucide-react";
import SectionHeader from "./section-header";
import { InfoCard } from "./info-card";

const pillars = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Educação",
    description: "Promover encontros de reflexão, capacitação e ensino sobre história e culturas africanas, afro-brasileiras e indígenas para transformar práticas educacionais.",
    className: "bg-forest-green",

  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Pesquisa",
    description: "Fomentar estudos multi, inter e transdisciplinares sobre relações étnico-raciais, publicando resultados que ampliem o conhecimento acadêmico e comunitário.",
    className: "bg-saddle-brown"
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    title: "Extensão",
    description: "Levar conhecimento e ações para comunidades, escolas e espaços públicos, criando diálogos permanentes com população negra, indígena, quilombola e urbana.",
    className: "bg-deep-blue"
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Comunidade",
    description: "Criar espaços acolhedores para integração entre estudantes, professores e comunidades, promovendo diálogos e fortalecendo laços para transformação coletiva.",
    className: "bg-gray-dark"
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gold mb-6 leading-tight">
            Os 4 Pilares do NEABI
          </h2>
          <p className="font-sans text-lg md:text-xl text-warm-white max-w-3xl mx-auto leading-relaxed">
            Nossa atuação é fundamentada em quatro pilares estratégicos que orientam todas as nossas iniciativas de transformação educacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {pillars.map((pillar) => (
             <InfoCard 
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                className={pillar.className}
                titleClassName="text-2xl text-warm-white"
                descriptionClassName="text-warm-white"
                variant="top-icon"
             />
          ))}
        </div>
      </div>
    </section>
  );
}
