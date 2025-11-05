import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FlaskConical, Handshake, Users } from "lucide-react";
import SectionHeader from "./section-header";
import { InfoCard } from "./info-card";

const pillars = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Educação",
    description: "Promover encontros de reflexão, capacitação e ensino sobre história e culturas africanas, afro-brasileiras e indígenas para transformar práticas educacionais.",
    className: "bg-card border-primary"
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: "Pesquisa",
    description: "Fomentar estudos multi, inter e transdisciplinares sobre relações étnico-raciais, publicando resultados que ampliem o conhecimento acadêmico e comunitário.",
    className: "bg-card border-primary"
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: "Extensão",
    description: "Levar conhecimento e ações para comunidades, escolas e espaços públicos, criando diálogos permanentes com população negra, indígena, quilombola e urbana.",
    className: "bg-card border-primary"
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Comunidade",
    description: "Criar espaços acolhedores para integração entre estudantes, professores e comunidades, promovendo diálogos e fortalecendo laços para transformação coletiva.",
    className: "bg-card border-primary"
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-muted/30 text-foreground py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeader
            title="Os 4 Pilares do NEABI"
            subtitle="Atuamos em áreas estratégicas para a transformação educacional"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {pillars.map((pillar) => (
             <InfoCard 
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                className={pillar.className}
                titleClassName="text-2xl"
                variant="top-icon"
             />
          ))}
        </div>
      </div>
    </section>
  );
}
