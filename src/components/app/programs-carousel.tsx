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
    <section id="programs-carousel" className="w-full bg-cream-bg py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-dark-bg">Conheça Nossos Programas</h2>
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
          <CarouselContent className="-ml-4">
            {programs.map((program) => {
              const image = PlaceHolderImages.find((img) => img.id === program.id);
              return (
                <CarouselItem key={program.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-white rounded-lg shadow-md overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="relative w-full aspect-video">
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
                          <Badge variant="default" className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-dark-bg">
                            {program.category}
                          </Badge>
                          <h3 className="font-headline text-xl md:text-2xl font-semibold text-dark-bg mb-3 leading-snug">{program.title}</h3>
                          <p className="text-base text-gray-800 leading-relaxed mb-4 flex-1">{program.description}</p>
                          <Button asChild size="sm" className="mt-auto font-accent font-semibold bg-gold text-dark-bg hover:bg-gold/90 px-5 py-2.5 rounded">
                            <Link href="#">Conheça o Programa</Link>
                          </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-10 text-gold hover:bg-gold hover:text-dark-bg" />
          <CarouselNext className="mr-10 text-gold hover:bg-gold hover:text-dark-bg" />
        </Carousel>
      </div>
    </section>
  )
}
