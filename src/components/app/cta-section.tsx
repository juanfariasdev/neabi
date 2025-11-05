import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full bg-secondary py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Junte-se a Nós na Construção de um Futuro Antirracista
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Seja você estudante, educador(a) ou membro da comunidade, sua participação é vital. Explore nossos programas, participe de nossos eventos ou entre em contato para ver como você pode contribuir para a transformação educacional.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="font-accent font-bold">
            <Link href="#">Explore os Programas</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-accent font-bold">
            <Link href="#">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
