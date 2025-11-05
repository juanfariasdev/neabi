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
import { Quote } from "lucide-react";

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
    <section className="w-full py-12 md:py-16 lg:py-20 bg-dark-bg text-cream-bg">
      <div className="container mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-gold">Vozes da Nossa Comunidade</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-cream-bg/90 leading-relaxed">Ouça diretamente daqueles que fizeram parte da nossa jornada.</p>
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
                    <Card className="bg-white/5 border-2 border-gold/20 rounded-lg">
                      <CardContent className="p-8 text-center flex flex-col items-center">
                         <Quote className="text-gold/30 text-4xl mb-6" />
                        <blockquote className="max-w-2xl text-lg md:text-xl font-medium text-cream-bg italic leading-relaxed">
                          <p>&ldquo;{testimonial.quote}&rdquo;</p>
                        </blockquote>
                        <div className="w-20 h-px bg-gold/50 my-6"></div>
                        <footer className="flex items-center gap-4">
                          {image && (
                            <Avatar className="w-16 h-16 border-2 border-gold">
                              <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div className="font-accent font-bold text-lg text-gold text-left">{testimonial.name}</div>
                            <div className="text-gray-mid text-sm text-left">{testimonial.role}</div>
                          </div>
                        </footer>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-4 text-gold hover:bg-gold hover:text-dark-bg" />
          <CarouselNext className="-right-4 text-gold hover:bg-gold hover:text-dark-bg"/>
        </Carousel>
      </div>
    </section>
  )
}
