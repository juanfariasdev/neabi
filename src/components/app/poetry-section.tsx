import Image from "next/image";
import Link from "next/link";
import { PenTool } from "lucide-react";

import PoemaImg from "@/assets/poema.jpg";

export default function PoetrySection() {
    return (
        <section className="w-full py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-[#815326]">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gold/20 rounded-lg transform rotate-6"></div>
                            <Image
                                src={PoemaImg.src}
                                alt="Mulheres negras de diferentes gerações - avó, mãe, filha - em harmonia e força"
                                width={500}
                                height={500}
                                className="relative w-full rounded-lg shadow-xl object-cover aspect-square"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2">
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-gold mb-4 leading-tight">
                            Vozes-Mulheres
                        </h2>
                        <p className="font-sans text-lg text-warm-white/90 mb-8 leading-relaxed">
                            Um poema que ecoa através das gerações, celebrando as vozes silenciadas e encontrando liberdade na ressonância de quem veio antes.
                        </p>

                        <div className="space-y-6 mb-5">
                            <div className="text-warm-white/90 leading-relaxed font-sans italic text-base flex gap-4">
                                <div className="flex flex-col gap-4">
                                    <p>
                                        A voz de minha bisavó<br />
                                        ecoou criança<br />
                                        nos porões do navio<br />
                                        ecoou lamentos<br />
                                        de uma infância perdida.<br />
                                    </p>
                                    <p>
                                        A voz de minha mãe<br />
                                        ecoou baixinho revolta<br />
                                        no fundo das cozinhas alheias<br />
                                        debaixo das trouxas<br />
                                        roupagens sujas dos brancos<br />
                                        pelo caminho empoeirado<br />
                                        rumo à favela<br />
                                    </p>
                                    <p>
                                        A minha voz ainda<br />
                                        ecoa versos perplexos<br />
                                        com rimas de sangue<br />
                                        e fome.<br />
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        A voz de minha filha<br />
                                        recolhe todas as nossas vozes<br />
                                        recolhe em si<br />
                                        as vozes mudas caladas<br />
                                        engasgadas nas gargantas<br />
                                    </p>
                                    <p>
                                        A voz de minha filha <br />
                                        recolhe em si<br />
                                        a fala e o ato.<br />
                                        O ontem – o hoje – o agora.<br />
                                        Na voz de minha filha<br />
                                        se fará ouvir a ressonância<br />
                                        O eco da vida-liberdade.<br />
                                        A voz de minha filha<br />
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 mb-8 justify-end">
                            <PenTool className="h-8 w-8 text-gold" />
                            <div>
                                <p className="font-heading font-bold text-lg text-gold">Conceição Evaristo</p>
                                <p className="font-sans text-sm text-warm-white/70">Poeta e escritora afro-brasileira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
