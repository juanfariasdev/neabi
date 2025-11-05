"use client";

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

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
  <Card className="bg-white border-l-4 border-[#D4AF37] p-5 rounded-md shadow-sm mb-4 flex flex-col sm:flex-row items-start gap-4">
    <div className="text-center sm:text-left">
      <p className="font-accent font-bold text-base text-[#D4AF37]">{event.date} • {event.time}</p>
      <h3 className="font-headline text-xl md:text-2xl font-bold text-[#1a1a1a] my-2">{event.title}</h3>
      <div className="flex items-center text-xs text-muted-foreground mb-3">
        <MapPin className="h-4 w-4 mr-1.5" />
        <span>{event.location}</span>
      </div>
      <p className="font-body text-sm text-[#1a1a1a]/80 mb-4">{event.description}</p>
      <Button size="sm" className="font-accent font-bold bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#D4AF37]/90 px-5 py-2.5 rounded">
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
    <section className="w-full bg-[#f8f7f4] py-20 md:py-24 relative overflow-hidden">
        <div
            className="absolute top-0 left-0 h-64 w-64 bg-repeat opacity-[0.02]"
            style={{
            backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231a1a1a\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
        />
      <div className="container mx-auto max-w-5xl px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
            Eventos & Calendário
          </h2>
        </div>

        <Tabs value={Object.keys(tabMapping).find(key => tabMapping[key] === activeTab)} onValueChange={handleTabChange} className="mb-8 flex justify-center">
            <TabsList className="bg-transparent p-0">
                {Object.keys(tabMapping).map((tab) => (
                <TabsTrigger
                    key={tab}
                    value={tab}
                    className="font-accent text-sm md:text-base font-bold text-muted-foreground data-[state=active]:text-[#D4AF37] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none bg-transparent hover:text-[#D4AF37]/80 transition-colors mx-2 md:mx-6"
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