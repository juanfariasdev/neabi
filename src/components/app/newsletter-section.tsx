'use client';

export default function NewsletterSection() {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-deep-black border-t-4 border-gold">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-gold mb-4">
          Fique por Dentro de Nossas Ações
        </h3>
        <p className="font-sans text-lg text-warm-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Inscreva-se em nossa newsletter para receber notícias, eventos e recursos de educação antirracista direto em seu e-mail.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input
            className="flex-grow bg-transparent border-2 border-gold text-warm-white rounded-md px-4 py-3 focus:ring-2 focus:ring-gold focus:ring-opacity-30 placeholder-gray-mid transition-all duration-smooth"
            placeholder="Seu melhor e-mail"
            name="email"
            type="email"
            required
          />
          <button
            className="bg-gold text-deep-black font-heading font-bold py-3 px-8 rounded-md transition-all duration-smooth hover:bg-opacity-90 active:scale-95 shadow-md hover:shadow-lg whitespace-nowrap"
            type="submit"
          >
            Se Inscrever
          </button>
        </form>
      </div>
    </section>
  );
}
