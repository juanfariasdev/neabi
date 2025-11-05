"use client"

import Image from "next/image"
import Link from "next/link"
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
    title: "Oficina de Pedagogia Antirracista",
    category: "Educação",
    description: "Uma série de oficinas para educadores sobre a implementação de estratégias antirracistas na sala de aula.",
  },
  {
    id: "program-2",
    title: "Projeto Histórias Indígenas",
    category: "Pesquisa",
    description: "Uma iniciativa de pesquisa focada em preservar e compartilhar as histórias orais de comunidades indígenas locais.",
  },
  {
    id: "program-3",
    title: "Círculo Comunitário de Cinema",
    category: "Extensão",
    description: "Exibições mensais e debates de filmes de diretores negros e indígenas.",
  },
  {
    id: "program-4",
    title: "Festival Arte & Resistência",
    category: "Comunidade",
    description: "Um festival anual que celebra a expressão cultural como forma de resistência e resiliência.",
  },
]

export default function ProgramsCarousel() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Programas Principais</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Explore algumas de nossas principais iniciativas que impulsionam a mudança na educação e no engajamento comunitário.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {programs.map((program) => {
              const image = PlaceHolderImages.find((img) => img.id === program.id);
              return (
                <CarouselItem key={program.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group">
                      <CardContent className="flex flex-col items-start p-0">
                        {image && (
                          <div className="relative w-full h-56">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                        <div className="p-6 w-full">
                          <Badge variant="default" className="mb-2 bg-primary text-primary-foreground">{program.category}</Badge>
                          <h3 className="font-headline text-xl font-bold">{program.title}</h3>
                          <p className="mt-2 text-muted-foreground h-20">{program.description}</p>
                          <Button asChild variant="link" className="p-0 mt-4 font-accent font-bold text-primary">
                            <Link href="#">Saiba Mais &rarr;</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-14" />
          <CarouselNext className="mr-14" />
        </Carousel>
      </div>
    </section>
  )
}
