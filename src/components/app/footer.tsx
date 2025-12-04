import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

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


const footerLinks = {
  about: [
    { title: "Quem Somos", href: "#" },
    { title: "História", href: "#" },
    { title: "Missão & Objetivos", href: "#" },
    { title: "Estrutura", href: "#" },
  ],
  programs: [
    { title: "Educação", href: "#" },
    { title: "Pesquisa", href: "#" },
    { title: "Extensão", href: "#" },
    { title: "Comunidade", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Recursos", href: "#" },
  ],
  institution: [
    { title: "IFSULDEMINAS", href: "#" },
    { title: "Campus Machado", href: "#" },
    { title: "ABPN", href: "#" },
    { title: "Fundação Palmares", href: "#" },
    { title: "FUNAI", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="font-headline text-base font-bold text-primary mb-4">Sobre NEABI</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-secondary-foreground hover:text-primary transition-colors" style={{lineHeight: 1.8}}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-base font-bold text-primary mb-4">Programas & Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-secondary-foreground hover:text-primary transition-colors" style={{lineHeight: 1.8}}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-base font-bold text-primary mb-4">Institucional</h3>
            <ul className="space-y-3">
              {footerLinks.institution.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-secondary-foreground hover:text-primary transition-colors" style={{lineHeight: 1.8}}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-base font-bold text-primary mb-4">Contato & Redes</h3>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-primary mt-1" />
                    <span className="text-secondary-foreground">contato@neabi.edu.br</span>
                </li>
                <li className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-primary mt-1" />
                    <span className="text-secondary-foreground">(35) 3295-9500</span>
                </li>
                <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-secondary-foreground leading-relaxed" style={{lineHeight: 1.6}}>IFSULDEMINAS <br/>Machado, MG 37750-000</span>
                </li>
            </ul>
            <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors"><span className="sr-only">Instagram</span><Instagram className="h-6 w-6" /></Link>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors"><span className="sr-only">Facebook</span><FacebookIcon className="h-6 w-6" /></Link>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors"><span className="sr-only">WhatsApp</span><WhatsAppIcon className="h-6 w-6" /></Link>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors"><span className="sr-only">Twitter</span><TwitterIcon className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-6 h-[1px] bg-border"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
                &copy; {new Date().getFullYear()} NEABI - Todos os direitos reservados
            </p>
            <div className="text-xs text-muted-foreground mt-4 sm:mt-0">
                <Link href="#" className="hover:underline text-primary">Política de Privacidade</Link>
                <span className="mx-2">|</span>
                <Link href="#" className="hover:underline text-primary">Termos de Uso</Link>
                <span className="mx-2">|</span>
                <Link href="#" className="hover:underline text-primary">Acessibilidade</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
