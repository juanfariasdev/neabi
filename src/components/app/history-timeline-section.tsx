import { Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { TimelineEvent } from "@/lib/prismic-utils";

interface HistoryTimelineSectionProps {
  events: TimelineEvent[];
}

export default function HistoryTimelineSection({ events = [] }: HistoryTimelineSectionProps) {
    return (
        <section id="history-timeline-section" className="w-full py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-warm-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-deep-black mb-4 leading-tight">
                        Histórico de Ações
                    </h2>
                    <p className="font-sans text-lg text-gray-dark max-w-3xl mx-auto leading-relaxed">
                        Principais eventos e ações realizadas pelo NEABI Campus Machado
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold to-warm-orange"></div>

                    <div className="space-y-12 md:space-y-16">
                        {events.length === 0 ? (
                            <p className="text-center text-muted-foreground">Nenhum evento encontrado.</p>
                        ) : (
                            events.map((event, index) => (
                                <div key={index} className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
                                    <div className="md:w-1/2">
                                        <div className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-smooth border-l-4 border-${event.color} h-full`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <Calendar className={`h-8 w-8 text-${event.color}`} />
                                                <span className={`font-heading font-bold text-sm text-${event.color} bg-${event.color}/10 px-3 py-1 rounded-full`}>{event.year}</span>
                                            </div>
                                            <h3 className="font-display font-bold text-2xl text-deep-black mb-3">{event.title}</h3>
                                            <p className="font-sans text-base text-gray-dark leading-relaxed mb-4">{event.description}</p>
                                            <Link
                                                href={event.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 text-${event.color} font-heading font-bold hover:text-gold transition-colors duration-smooth`}
                                            >
                                                Leia Mais
                                                <span className="text-lg">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className={`w-16 h-16 bg-${event.color} rounded-full border-4 border-warm-white shadow-md flex items-center justify-center relative z-10`}>
                                            <CheckCircle className="text-white h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2"></div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
