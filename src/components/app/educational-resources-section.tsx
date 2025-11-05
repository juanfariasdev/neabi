"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Film, Mic, Users, GraduationCap, School } from "lucide-react";
import SectionHeader from './section-header';

const resources = [
  {
    type: "Guia",
    icon: <Book className="h-8 w-8 text-primary" />,
    title: "Guia Prático para Educadores",
    description: "Um guia completo com estratégias para aplicar a educação antirracista em sala de aula.",
    audience: "Educadores",
    category: "Educadores",
    href: "#"
  },
  {
    type: "Documentário",
    icon: <Film className="h-8 w-8 text-primary" />,
    title: "Vozes da Resistência",
    description: "Documentário que explora a história e o legado dos movimentos negros no Brasil.",
    audience: "Ensino Superior",
    category: "Ensino Superior",
    href: "#"
  },
  {
    type: "Material Didático",
    icon: <School className="h-8 w-8 text-primary" />,
    title: "História da África para Crianças",
    description: "Atividades e histórias para ensinar sobre a riqueza cultural do continente africano para o público infantil.",
    audience: "K-12",
    category: "K-12",
    href: "#"
  },
  {
    type: "Podcast",
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: "NEABI Conversa",
    description: "Podcast com entrevistas e debates sobre os desafios e avanços da pauta étnico-racial no Brasil.",
    audience: "Comunidade",
    category: "Comunidade",
    href: "#"
  },
  {
    type: "Artigo Acadêmico",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Impacto das Cotas Raciais",
    description: "Análise dos resultados das políticas de ações afirmativas nas universidades federais.",
    audience: "Ensino Superior",
    category: "Ensino Superior",
    href: "#"
  },
  {
    type: "Oficina",
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Círculos de Diálogo",
    description: "Material de apoio para organizar rodas de conversa sobre branquitude e privilégio.",
    audience: "Comunidade",
    category: "Comunidade",
    href: "#"
  },
];

export default function EducationalResources() {
  const [activeTab, setActiveTab] = useState('Todos');

  const filteredResources = activeTab === 'Todos'
    ? resources
    : resources.filter(r => r.category === activeTab);

  return (
    <section id="educational-resources" className="w-full bg-muted/30 text-foreground py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeader 
          title="Recursos Educacionais"
          subtitle="Explore materiais selecionados para educar sobre diversidade, equidade e história."
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12 flex justify-center">
          <TabsList className="bg-transparent p-0">
            {['Todos', 'K-12', 'Ensino Superior', 'Educadores', 'Comunidade'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="font-accent text-sm md:text-base font-bold text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent hover:text-primary/80 transition-colors mx-2 md:mx-4 px-2 py-1"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredResources.map((resource, index) => (
            <Card key={index} className="bg-card border-l-4 border-primary rounded-lg shadow-md flex flex-col p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4">
                {resource.icon}
              </div>
              <h3 className="font-headline text-xl font-bold text-foreground mb-2">{resource.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-grow mb-4">{resource.description}</p>
              <div className="mb-4">
                <Badge className="font-accent text-xs font-bold">{resource.audience}</Badge>
              </div>
              <Button asChild size="sm" className="mt-auto font-accent font-bold rounded self-start px-4 py-2">
                <a href={resource.href}>Acessar</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
