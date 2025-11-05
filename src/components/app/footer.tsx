import Link from "next/link";
import { Instagram } from "lucide-react";

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
    { title: "Nossa Missão", href: "#" },
    { title: "Nossa História", href: "#" },
    { title: "Nossa Equipe", href: "#" },
  ],
  programs: [
    { title: "Educação", href: "#" },
    { title: "Pesquisa", href: "#" },
    { title: "Comunidade", href: "#" },
  ],
  resources: [
    { title: "Blog", href: "#" },
    { title: "Publicações", href: "#" },
    { title: "Eventos", href: "#" },
  ],
  contact: [
    { title: "Fale Conosco", href: "#" },
    { title: "Apoie o NEABI", href: "#" },
    { title: "FAQ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="#" className="text-2xl font-bold font-headline text-primary">
              NEABI
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Transformação Educacional e Equidade.
            </p>
          </div>

          <div>
            <h3 className="font-accent font-bold tracking-wider text-sm uppercase text-muted-foreground">Sobre</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-base hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-accent font-bold tracking-wider text-sm uppercase text-muted-foreground">Programas</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-base hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-accent font-bold tracking-wider text-sm uppercase text-muted-foreground">Recursos</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-base hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-accent font-bold tracking-wider text-sm uppercase text-muted-foreground">Conecte-se</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-base hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">WhatsApp</span>
              <WhatsAppIcon className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-4 sm:mt-0 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NEABI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
