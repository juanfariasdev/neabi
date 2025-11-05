"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const testimonials = [
  {
    id: "testimonial-1",
    quote: "O NEABI proporcionou um espaço onde me senti vista e ouvida. Foi crucial para minha jornada acadêmica e meu crescimento pessoal como mulher negra na universidade.",
    name: "Mariana Santos",
    role: "Estudante de História",
  },
  {
    id: "testimonial-2",
    quote: "A pesquisa e os recursos do NEABI foram inestimáveis para minha prática docente. Transformou a forma como abordo as discussões sobre raça e história.",
    name: "Dr. Carlos Silva",
    role: "Professor de Educação",
  },
  {
    id: "testimonial-3",
    quote: "Fazer parte da comunidade NEABI me conectou com pessoas incríveis e abriu meus olhos para a importância dos sistemas de conhecimento indígenas.",
    name: "Aiyra Pataxó",
    role: "Membro da Comunidade e Artesã",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Vozes da Nossa Comunidade</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Ouça diretamente daqueles que fizeram parte da nossa jornada.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
              return (
                <CarouselItem key={testimonial.name}>
                  <div className="p-4">
                    <Card className="border-2 border-primary/20 bg-primary/5">
                      <CardContent className="p-8 text-center flex flex-col items-center">
                        {image && (
                           <Avatar className="w-24 h-24 mb-6 border-4 border-primary">
                            <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <blockquote className="max-w-2xl text-xl font-medium text-foreground italic">
                          <p>&ldquo;{testimonial.quote}&rdquo;</p>
                        </blockquote>
                        <footer className="mt-6">
                          <div className="font-accent font-bold text-lg text-primary">{testimonial.name}</div>
                          <div className="text-muted-foreground">{testimonial.role}</div>
                        </footer>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4"/>
        </Carousel>
      </div>
    </section>
  )
}
