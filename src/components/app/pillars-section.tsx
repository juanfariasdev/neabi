import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FlaskConical, Users, Building2 } from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Education",
    description: "Promoting antiracist teaching practices and developing inclusive curricula to transform educational environments."
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: "Research",
    description: "Advancing knowledge on ethnic-racial relations, and the history and culture of African, Afro-Brazilian and Indigenous peoples."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Extension",
    description: "Engaging with the wider community through workshops, courses, and cultural events to promote dialogue and social change."
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Community",
    description: "Building inclusive and welcoming spaces for students, educators, and community members to connect, learn, and grow together."
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Our Four Pillars of Action</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">NEABI's work is structured around four interconnected pillars that guide our mission for equity and justice.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
                  {pillar.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-2xl mb-2">{pillar.title}</CardTitle>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
