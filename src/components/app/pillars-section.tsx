import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FlaskConical, Users, Building2 } from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Educação",
    description: "Promovendo práticas de ensino antirracistas e desenvolvendo currículos inclusivos para transformar ambientes educacionais."
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: "Pesquisa",
    description: "Avançando o conhecimento sobre relações étnico-raciais e a história e cultura dos povos africanos, afro-brasileiros e indígenas."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Extensão",
    description: "Engajando-se com a comunidade em geral através de oficinas, cursos e eventos culturais para promover o diálogo e a mudança social."
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Comunidade",
    description: "Construindo espaços inclusivos e acolhedores para estudantes, educadores e membros da comunidade se conectarem, aprenderem e crescerem juntos."
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Nossos Quatro Pilares de Ação</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">O trabalho do NEABI está estruturado em torno de quatro pilares interconectados que guiam nossa missão por equidade e justiça.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
                  {pillar.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-2xl mb-2">{pillar.title}</CardTitle>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
