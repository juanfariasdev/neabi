import { Calendar, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";

export default function QuickContactCards() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-gray-light/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Encontros */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-smooth border-l-4 border-gold">
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="h-12 w-12 text-gold" />
              <div>
                <h3 className="font-heading font-bold text-xl text-deep-black">Encontros</h3>
                <p className="font-sans text-sm text-gray-mid">Reuniões Semanais</p>
              </div>
            </div>
            <p className="font-sans text-base text-gray-dark leading-relaxed mb-4">
              Nossas reuniões acontecem todas as <strong>quartas-feiras às 14h</strong> no IFSULDEMINAS Campus Machado para discussões e ações coletivas.
            </p>
            <p className="font-sans text-sm text-gray-mid">
              <strong>Sala:</strong> Setor de Extensão
            </p>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-smooth border-l-4 border-warm-orange">
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="h-12 w-12 text-warm-orange" />
              <div>
                <h3 className="font-heading font-bold text-xl text-deep-black">WhatsApp</h3>
                <p className="font-sans text-sm text-gray-mid">Grupo Comunitário</p>
              </div>
            </div>
            <p className="font-sans text-base text-gray-dark leading-relaxed mb-6">
              O NEABI possui um grupo no WhatsApp para melhor comunicação, compartilhamento de eventos e discussões permanentes.
            </p>
            <Link 
              href="#whatsapp" 
              className="inline-flex items-center gap-2 bg-warm-orange text-white font-heading font-bold py-2 px-4 rounded-md transition-all duration-smooth hover:bg-opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Entrar no Grupo
            </Link>
          </div>

          {/* Card 3: Instagram */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-smooth border-l-4 border-forest-green">
            <div className="flex items-center gap-4 mb-6">
              <Instagram className="h-12 w-12 text-forest-green" />
              <div>
                <h3 className="font-heading font-bold text-xl text-deep-black">Instagram</h3>
                <p className="font-sans text-sm text-gray-mid">Siga Nossas Ações</p>
              </div>
            </div>
            <p className="font-sans text-base text-gray-dark leading-relaxed mb-6">
              Nossa página no Instagram compartilha todas as atividades do núcleo, eventos, pesquisas e momentos comunitários.
            </p>
            <Link 
              href="https://www.instagram.com/neabi_machado" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-green text-white font-heading font-bold py-2 px-4 rounded-md transition-all duration-smooth hover:bg-opacity-90"
            >
              <Instagram className="h-4 w-4" />
              Seguir @neabi_machado
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
