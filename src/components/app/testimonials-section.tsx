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
    quote: "NEABI provided a space where I felt seen and heard. It was crucial for my academic journey and my personal growth as a Black woman in university.",
    name: "Mariana Santos",
    role: "History Student",
  },
  {
    id: "testimonial-2",
    quote: "The research and resources from NEABI have been invaluable for my teaching practice. It's transformed how I approach discussions on race and history.",
    name: "Dr. Carlos Silva",
    role: "Professor of Education",
  },
  {
    id: "testimonial-3",
    quote: "Being part of the NEABI community connected me with incredible people and opened my eyes to the importance of Indigenous knowledge systems.",
    name: "Aiyra Pataxó",
    role: "Community Member & Artisan",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Voices of Our Community</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Hear directly from those who have been part of our journey.</p>
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
