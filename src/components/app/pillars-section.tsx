import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FlaskConical, Users, Handshake, Building2 } from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="h-12 w-12 text-[#D4AF37]" />,
    title: "Educação",
    description: "Promover encontros de reflexão, capacitação e ensino sobre história e culturas africanas, afro-brasileiras e indígenas para transformar práticas educacionais.",
    bgColor: "bg-[#2d5016]"
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-[#D4AF37]" />,
    title: "Pesquisa",
    description: "Fomentar estudos multi, inter e transdisciplinares sobre relações étnico-raciais, publicando resultados que ampliem o conhecimento acadêmico e comunitário.",
    bgColor: "bg-[#8B4513]"
  },
  {
    icon: <Handshake className="h-12 w-12 text-[#D4AF37]" />,
    title: "Extensão",
    description: "Levar conhecimento e ações para comunidades, escolas e espaços públicos, criando diálogos permanentes com população negra, indígena, quilombola e urbana.",
    bgColor: "bg-[#1f3a70]"
  },
  {
    icon: <Users className="h-12 w-12 text-[#D4AF37]" />,
    title: "Comunidade",
    description: "Criar espaços acolhedores para integração entre estudantes, professores e comunidades, promovendo diálogos e fortalecendo laços para transformação coletiva.",
    bgColor: "bg-[#8B4513]"
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full bg-[#1a1a1a] text-[#f8f7f4] py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-[#D4AF37] md:text-5xl">Os 4 Pilares do NEABI</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-[#f8f7f4]">Atuamos em áreas estratégicas para a transformação educacional</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className={`${pillar.bgColor} text-[#f8f7f4] border-l-4 border-[#D4AF37] rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1`}>
              <CardContent className="p-9">
                 <div className="mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">{pillar.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-95">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
