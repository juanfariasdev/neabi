'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-dark-bg py-10 md:py-12 border-t-2 border-gold">
      <div className="container mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
        <div className="text-center mb-6">
          <h3 className="font-accent font-bold text-lg md:text-2xl text-gold">
            Fique por Dentro das Nossas Novidades
          </h3>
          <p className="font-body text-base text-cream-bg mt-3">
            Assine nossa newsletter e receba atualizações sobre eventos, pesquisas e novas publicações.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row items-center gap-3 max-w-2xl mx-auto">
          <Input 
            type="email" 
            placeholder="Seu email" 
            className="flex-grow h-11 bg-transparent border-gold text-white placeholder:text-gray-mid focus:ring-offset-gold focus:ring-gold"
          />
          <Button 
            type="submit" 
            className="font-accent font-semibold bg-gold text-dark-bg hover:bg-gold/90 transition-all duration-200 h-11 px-6 w-full sm:w-auto rounded"
          >
            Se Inscrever
          </Button>
        </form>
      </div>
    </section>
  );
}
