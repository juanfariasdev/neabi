import { Heart, TrendingUp, Scale, Brain, Link2, Megaphone } from "lucide-react";
import SectionHeader from "./section-header";
import { InfoCard } from "./info-card";

const objectives = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Valorização",
    description: "Promover ações de valorização das identidades negra e indígenas, impulsionando a cultura da educação para a convivência e aceitação da diversidade.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Desenvolvimento",
    description: "Estimular ações educativas e divulgar a influência das culturas negra e indígena na formação do povo brasileiro, inserindo essas temáticas nos currículos escolares.",
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: "Igualdade",
    description: "Fomentar estudos multi, inter e transdisciplinares sobre temas étnico-raciais e publicar resultados dessas pesquisas, contribuindo para redução de desigualdades.",
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Reflexão",
    description: "Organizar encontros de reflexão e capacitação sobre a história, culturas africanas, afro-brasileiras e indígenas, aprofundando conhecimento e criticidade.",
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: "Integração",
    description: "Criar ações de integração entre estudantes, escolas e comunidades negras, indígenas, quilombolas, urbanas e rurais, estabelecendo parcerias duráveis.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Divulgação",
    description: "Incentivar estratégias para divulgar as ações do núcleo ao público interno e externo, ampliando visibilidade e engajamento comunitário nas redes sociais.",
  },
];

export default function WhatNeabiDoes() {
  return (
    <section className="w-full bg-primary/10 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeader 
          title="O Que Fazem os NEABIs"
          subtitle="A sigla NEABI significa Núcleo de Estudos Afro-Brasileiros e Indígenas. Alguns dos nossos principais objetivos são:"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-12">
          {objectives.map((objective) => (
            <InfoCard 
              key={objective.title}
              icon={objective.icon}
              title={objective.title}
              description={objective.description}
              variant="side-icon"
              className="bg-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
