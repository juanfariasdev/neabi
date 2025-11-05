import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FlaskConical, Handshake, Users } from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="h-12 w-12 text-gold" />,
    title: "Educação",
    description: "Promover encontros de reflexão, capacitação e ensino sobre história e culturas africanas, afro-brasileiras e indígenas para transformar práticas educacionais.",
    bgColor: "bg-forest"
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-gold" />,
    title: "Pesquisa",
    description: "Fomentar estudos multi, inter e transdisciplinares sobre relações étnico-raciais, publicando resultados que ampliem o conhecimento acadêmico e comunitário.",
    bgColor: "bg-terra"
  },
  {
    icon: <Handshake className="h-12 w-12 text-gold" />,
    title: "Extensão",
    description: "Levar conhecimento e ações para comunidades, escolas e espaços públicos, criando diálogos permanentes com população negra, indígena, quilombola e urbana.",
    bgColor: "bg-ocean"
  },
  {
    icon: <Users className="h-12 w-12 text-gold" />,
    title: "Comunidade",
    description: "Criar espaços acolhedores para integração entre estudantes, professores e comunidades, promovendo diálogos e fortalecendo laços para transformação coletiva.",
    bgColor: "bg-terra"
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-dark-bg text-cream-bg py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gold">Os 4 Pilares do NEABI</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-cream-bg/90 leading-relaxed">Atuamos em áreas estratégicas para a transformação educacional</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className={`${pillar.bgColor} text-cream-bg border-l-4 border-gold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1`}>
              <CardContent className="p-8">
                 <div className="mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-4">{pillar.title}</h3>
                <p className="font-body text-base leading-relaxed opacity-95">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
