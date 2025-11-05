"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Film, Mic, Users, GraduationCap, School } from "lucide-react";

const resources = [
  {
    type: "Guia",
    icon: <Book className="h-8 w-8 text-[#D4AF37]" />,
    title: "Guia Prático para Educadores",
    description: "Um guia completo com estratégias para aplicar a educação antirracista em sala de aula.",
    audience: "Educadores",
    category: "Educadores",
    href: "#"
  },
  {
    type: "Documentário",
    icon: <Film className="h-8 w-8 text-[#D4AF37]" />,
    title: "Vozes da Resistência",
    description: "Documentário que explora a história e o legado dos movimentos negros no Brasil.",
    audience: "Ensino Superior",
    category: "Ensino Superior",
    href: "#"
  },
  {
    type: "Material Didático",
    icon: <School className="h-8 w-8 text-[#D4AF37]" />,
    title: "História da África para Crianças",
    description: "Atividades e histórias para ensinar sobre a riqueza cultural do continente africano para o público infantil.",
    audience: "K-12",
    category: "K-12",
    href: "#"
  },
  {
    type: "Podcast",
    icon: <Mic className="h-8 w-8 text-[#D4AF37]" />,
    title: "NEABI Conversa",
    description: "Podcast com entrevistas e debates sobre os desafios e avanços da pauta étnico-racial no Brasil.",
    audience: "Comunidade",
    category: "Comunidade",
    href: "#"
  },
  {
    type: "Artigo Acadêmico",
    icon: <GraduationCap className="h-8 w-8 text-[#D4AF37]" />,
    title: "Impacto das Cotas Raciais",
    description: "Análise dos resultados das políticas de ações afirmativas nas universidades federais.",
    audience: "Ensino Superior",
    category: "Ensino Superior",
    href: "#"
  },
  {
    type: "Oficina",
    icon: <Users className="h-8 w-8 text-[#D4AF37]" />,
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
    <section className="w-full bg-[#1a1a1a] text-[#f8f7f4] py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-[#D4AF37]">
            Recursos Educacionais para Educação Antirracista
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-[#f8f7f4]">
            Explore materiais selecionados para educar sobre diversidade, equidade e história
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8 flex justify-center">
          <TabsList className="bg-transparent p-0">
            {['Todos', 'K-12', 'Ensino Superior', 'Educadores', 'Comunidade'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="font-accent text-sm font-bold text-[#f8f7f4] data-[state=active]:text-[#D4AF37] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none bg-transparent hover:text-[#D4AF37]/80 transition-colors mx-2 md:mx-4"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card key={index} className="bg-[#2d5016] border-0 rounded-lg shadow-lg flex flex-col p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-4">
                {resource.icon}
              </div>
              <h3 className="font-headline text-lg font-bold text-[#f8f7f4] mb-2">{resource.title}</h3>
              <p className="font-body text-xs text-[#f8f7f4]/90 leading-relaxed flex-grow mb-4">{resource.description}</p>
              <div className="mb-4">
                <Badge className="font-accent text-xs font-bold bg-[#D4AF37] text-[#1a1a1a] px-3 py-1 rounded-full">{resource.audience}</Badge>
              </div>
              <Button asChild size="sm" className="mt-auto font-accent font-bold bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#D4AF37]/90 rounded self-start">
                <a href={resource.href}>Acessar</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}