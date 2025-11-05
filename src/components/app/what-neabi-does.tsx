import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp, Scale, Brain, Link2, Megaphone } from "lucide-react";

const objectives = [
  {
    icon: <Heart className="h-10 w-10 text-gold" />,
    title: "Valorização",
    description: "Promover ações de valorização das identidades negra e indígenas, impulsionando a cultura da educação para a convivência e aceitação da diversidade.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-gold" />,
    title: "Desenvolvimento",
    description: "Estimular ações educativas e divulgar a influência das culturas negra e indígena na formação do povo brasileiro, inserindo essas temáticas nos currículos escolares.",
  },
  {
    icon: <Scale className="h-10 w-10 text-gold" />,
    title: "Igualdade",
    description: "Fomentar estudos multi, inter e transdisciplinares sobre temas étnico-raciais e publicar resultados dessas pesquisas, contribuindo para redução de desigualdades.",
  },
  {
    icon: <Brain className="h-10 w-10 text-gold" />,
    title: "Reflexão",
    description: "Organizar encontros de reflexão e capacitação sobre a história, culturas africanas, afro-brasileiras e indígenas, aprofundando conhecimento e criticidade.",
  },
  {
    icon: <Link2 className="h-10 w-10 text-gold" />,
    title: "Integração",
    description: "Criar ações de integração entre estudantes, escolas e comunidades negras, indígenas, quilombolas, urbanas e rurais, estabelecendo parcerias duráveis.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-gold" />,
    title: "Divulgação",
    description: "Incentivar estratégias para divulgar as ações do núcleo ao público interno e externo, ampliando visibilidade e engajamento comunitário nas redes sociais.",
  },
];

export default function WhatNeabiDoes() {
  return (
    <section className="w-full bg-warm-orange py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-cream-bg">O Que Fazem os NEABIs</h2>
          <p className="font-accent mt-4 text-lg font-semibold text-dark-bg">A sigla NEABI significa Núcleo de Estudos Afro-Brasileiros e Indígenas</p>
          <p className="mt-3 text-base md:text-lg text-dark-bg leading-relaxed">Alguns dos nossos principais objetivos são:</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {objectives.map((objective) => (
            <Card key={objective.title} className="bg-cream-bg rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {objective.icon}
                  <div>
                    <h3 className="font-headline text-xl md:text-2xl font-semibold mb-3 text-dark-bg leading-snug">{objective.title}</h3>
                    <p className="text-base text-gray-800 leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
