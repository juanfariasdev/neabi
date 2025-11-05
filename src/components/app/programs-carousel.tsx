"use client"

import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const programs = [
    {
      id: "program-1",
      title: "Formação Continuada de Docentes",
      category: "Educação",
      description: "Capacitação de professores para implementação de educação antirracista nos currículos escolares.",
    },
    {
      id: "program-2",
      title: "Iniciação Científica em Relações Étnico-Raciais",
      category: "Pesquisa",
      description: "Bolsas para estudantes desenvolverem pesquisas sobre temas de história e cultura africana, afro-brasileira e indígena.",
    },
    {
      id: "program-3",
      title: "Semana da Consciência Negra",
      category: "Extensão",
      description: "Evento anual de celebração com palestras, oficinas, apresentações culturais e debates sobre educação antirracista.",
    },
    {
      id: "program-4",
      title: "Rodas de Conversa Permanentes",
      category: "Comunidade",
      description: "Encontros semanais para diálogos sobre racismo, políticas afirmativas e construção de comunidade antirracista.",
    },
  ]

export default function ProgramsCarousel() {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 md:py-20 px-10 md:px-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl">Conheça Nossos Programas</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {programs.map((program) => {
              const image = PlaceHolderImages.find((img) => img.id === program.id);
              return (
                <CarouselItem key={program.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden group h-full flex flex-col rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-2xl">
                      <div className="relative w-full h-40 md:h-52">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                      <CardContent className="flex flex-col items-start p-6 flex-1">
                          <Badge variant="default" className="mb-3 inline-block rounded-full bg-[#D4AF37] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                            {program.category}
                          </Badge>
                          <h3 className="font-headline text-lg md:text-xl font-bold text-[#1a1a1a] mb-3">{program.title}</h3>
                          <p className="font-body text-sm text-[#1a1a1a]/80 leading-relaxed mb-4 flex-1" style={{ maxHeight: '80px', overflow: 'hidden' }}>{program.description}</p>
                          <Button asChild size="sm" className="mt-auto font-accent font-bold bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#D4AF37]/90 px-5 py-2.5 rounded">
                            <Link href="#">Conheça o Programa</Link>
                          </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-10 text-[#D4AF37]" />
          <CarouselNext className="mr-10 text-[#D4AF37]" />
        </Carousel>
      </div>
    </section>
  )
}
