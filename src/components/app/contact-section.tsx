import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './contact-form';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0.01-1.5 1.5-1.5h2.5V2H15c-3.07 0-4 1.93-4 4v2H8v4h3v8.5h3V13.5z" />
    </svg>
);
  
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);
  
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.3-1.38c1.39.72 2.97 1.14 4.65 1.14h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.92-9.91zM17.48 15.53c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.62.13-.19.27-.7.87-.86 1.04-.16.17-.32.19-.59.06-.27-.13-1.14-.42-2.17-1.33-.8-.72-1.34-1.62-1.5-1.9-.16-.27 0-.42.12-.55.11-.11.25-.27.37-.41.13-.13.17-.22.25-.37.09-.15.04-.28-.02-.41-.06-.13-.62-1.49-.84-2.04-.23-.55-.46-.48-.62-.48-.15 0-.32-.02-.49-.02-.17 0-.44.06-.67.33-.23.27-.88.85-.88 2.07s.9 2.4 1.03 2.57c.13.17 1.77 2.7 4.29 3.79 2.53 1.09 2.53.73 2.98.69.45-.04 1.41-.58 1.61-.92.2-.34.2-.64.14-.77z"/>
      </svg>
);
  
const infoCards = [
    {
      icon: <Mail className="h-8 w-8 text-black" />,
      title: 'Email',
      text: 'contato@neabi.edu.br',
    },
    {
      icon: <Phone className="h-8 w-8 text-black" />,
      title: 'Telefone',
      text: '(35) 3291-0000',
    },
    {
      icon: <MapPin className="h-8 w-8 text-black" />,
      title: 'Endereço',
      text: 'IFSULDEMINAS Campus Machado\nR. Ituiutaba, 85 - Machado, MG',
    },
];

export default function ContactSection() {
    return (
        <section className="w-full bg-gradient-to-r from-[#D4AF37] to-[#E67E22] py-20 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-[#f8f7f4]">
                        Quer Fazer Parte da Transformação?
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="text-black">
                        <h3 className="font-accent text-2xl font-bold mb-6 text-[#1a1a1a]">Fale Conosco</h3>
                        <div className="space-y-6">
                            {infoCards.map(card => (
                                <div key={card.title} className="flex items-start gap-4">
                                    {card.icon}
                                    <div>
                                        <h4 className="font-accent font-bold text-base text-[#1a1a1a]">{card.title}</h4>
                                        <p className="font-body text-sm text-[#1a1a1a] whitespace-pre-line">{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-8">
                            <a href="#" aria-label="Instagram"><Instagram className="h-8 w-8 text-black" /></a>
                            <a href="#" aria-label="Facebook"><FacebookIcon className="h-8 w-8 text-black" /></a>
                            <a href="#" aria-label="WhatsApp"><WhatsAppIcon className="h-8 w-8 text-black" /></a>
                            <a href="#" aria-label="Twitter"><TwitterIcon className="h-8 w-8 text-black" /></a>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}