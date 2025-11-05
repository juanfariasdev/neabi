'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-[#1a1a1a] py-10 md:py-12 border-t-2 border-[#D4AF37]">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-6">
          <h3 className="font-accent font-bold text-lg md:text-2xl text-[#D4AF37]">
            Fique por Dentro das Nossas Novidades
          </h3>
          <p className="font-body text-sm text-[#f8f7f4] mt-3">
            Assine nossa newsletter e receba atualizações sobre eventos, pesquisas e novas publicações.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row items-center gap-3">
          <Input 
            type="email" 
            placeholder="Seu email" 
            className="flex-grow h-11 bg-transparent border-[#D4AF37] text-white placeholder:text-muted-foreground focus:ring-offset-[#D4AF37] focus:ring-[#D4AF37]"
          />
          <Button 
            type="submit" 
            className="font-accent font-bold bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a025] h-11 px-6 w-full sm:w-auto"
          >
            Se Inscrever
          </Button>
        </form>
      </div>
    </section>
  );
}
