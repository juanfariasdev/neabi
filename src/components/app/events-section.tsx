"use client";

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import SectionHeader from './section-header';

const events = {
  upcoming: [
    {
      date: "20 de Novembro",
      time: "09:00",
      title: "Semana da Consciência Negra - Abertura",
      location: "Auditório Principal - Campus Machado",
      description: "Celebramos a Semana da Consciência Negra com uma abertura que homenageia a história de resistência e celebra a cultura afro-brasileira."
    },
    {
      date: "21 de Novembro",
      time: "14:00",
      title: "Oficina de Tranças e Turbantes",
      location: "Sala Cultural Bloco B",
      description: "Uma oficina prática para aprender sobre a estética e o significado cultural dos penteados afro."
    },
    {
      date: "22 de Novembro",
      time: "19:00",
      title: "Cine NEABI: Exibição de 'Medida Provisória'",
      location: "Anfiteatro - Campus Poços de Caldas",
      description: "Exibição do filme seguida de debate sobre ficção, racismo e futuro."
    }
  ],
  consciencia: [
    {
      date: "20 de Novembro",
      time: "09:00",
      title: "Abertura Oficial",
      location: "Auditório Principal",
      description: "Cerimônia de abertura com autoridades e apresentação cultural do grupo de capoeira local."
    },
     {
      date: "21 de Novembro",
      time: "14:00",
      title: "Oficina de Tranças e Turbantes",
      location: "Sala Cultural Bloco B",
      description: "Uma oficina prática para aprender sobre a estética e o significado cultural dos penteados afro."
    },
    {
      date: "22 de Novembro",
      time: "10:00",
      title: "Palestra: Racismo Estrutural e a Universidade",
      location: "Online - Transmissão YouTube",
      description: "Com a participação da Dra. Sílvia Almeida."
    },
  ],
  past: [
     {
      date: "10 de Outubro",
      time: "18:00",
      title: "Palestra sobre Cotas Raciais",
      location: "Auditório Bloco F",
      description: "Debate sobre a importância e os impactos das políticas de ação afirmativa."
    },
    {
      date: "15 de Setembro",
      time: "09:00",
      title: "Visita à Comunidade Quilombola do Carmo",
      location: "Saída do Campus Principal",
      description: "Atividade de extensão com troca de saberes e vivências."
    }
  ]
};

type EventCategory = keyof typeof events;

const EventCard = ({ event }: { event: typeof events.upcoming[0] }) => (
  <Card className="bg-card border-l-4 border-primary p-6 rounded-md shadow-sm mb-6 flex flex-col sm:flex-row items-start gap-6">
    <div className="text-center sm:text-left">
      <p className="font-accent font-bold text-base md:text-lg text-primary">{event.date} • {event.time}</p>
      <h3 className="font-headline text-xl md:text-2xl font-bold text-foreground my-2">{event.title}</h3>
      <div className="flex items-center text-sm text-muted-foreground mb-3">
        <MapPin className="h-4 w-4 mr-1.5" />
        <span>{event.location}</span>
      </div>
      <p className="text-base text-muted-foreground leading-relaxed mb-4">{event.description}</p>
      <Button size="sm" className="font-accent font-bold px-5 py-2 rounded">
        Inscrever-se
      </Button>
    </div>
  </Card>
);

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<EventCategory>('upcoming');

  const tabMapping: Record<string, EventCategory> = {
    "Próximos Eventos": 'upcoming',
    "Semana da Consciência Negra": 'consciencia',
    "Eventos Passados": 'past',
  };

  const handleTabChange = (value: string) => {
    setActiveTab(tabMapping[value]);
  };

  return (
    <section id="events-section" className="w-full bg-background py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div
            className="absolute top-0 left-0 h-full w-full bg-repeat opacity-[0.03]"
            style={{
            backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a0a0a0\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
        />
      <div className="container mx-auto max-w-5xl px-6 md:px-12 lg:px-16 z-10 relative">
        <SectionHeader title="Eventos & Calendário" />

        <Tabs value={Object.keys(tabMapping).find(key => tabMapping[key] === activeTab)} onValueChange={handleTabChange} className="mb-12 flex justify-center">
            <TabsList className="bg-transparent p-0">
                {Object.keys(tabMapping).map((tab) => (
                <TabsTrigger
                    key={tab}
                    value={tab}
                    className="font-accent text-sm md:text-base font-bold text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent hover:text-primary/80 transition-colors mx-2 md:mx-6 px-2 py-1"
                >
                    {tab}
                </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>

        <div>
            {events[activeTab].map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
      </div>
    </section>
  );
}
