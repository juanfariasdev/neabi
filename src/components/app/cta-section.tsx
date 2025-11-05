import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full bg-secondary py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Join Us in Building an Antiracist Future
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Whether you are a student, educator, or community member, your participation is vital. Explore our programs, join our events, or get in touch to see how you can contribute to educational transformation.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="font-accent font-bold">
            <Link href="#">Explore Programs</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-accent font-bold">
            <Link href="#">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
