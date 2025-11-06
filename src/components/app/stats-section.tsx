"use client";

import { useState, useEffect, useRef } from 'react';
import SectionHeader from './section-header';

const stats = [
  { value: 100, suffix: "+", label: "NEABIs Nacionalmente", description: "Espalhados por todas as regiões do Brasil" },
  { value: 66, suffix: "", label: "Anos de História", description: "Desde a criação do CEAO em 1959" },
  { value: 10000, suffix: "+", label: "Estudantes Apoiados", description: "Com ações de permanência e inclusão" },
  { value: 40, suffix: "+", label: "Pesquisas Publicadas", description: "Em periódicos científicos qualificados" },
];

const Counter = ({ to, suffix }: { to: number, suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = 0;
    const duration = 2000;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCount(Math.floor(easedProgress * (to - start) + start));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [to]);

  return <span className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">{count.toLocaleString()}{suffix}</span>;
};


export default function StatsSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeader title="Nosso Impacto em Números" subtitle="Construindo um legado de mudança e representatividade." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-smooth border-t-4 border-gold">
              {isInView && <Counter to={stat.value} suffix={stat.suffix} />}
              <p className="font-sans font-semibold text-base md:text-lg text-deep-black">{stat.label}</p>
              <p className="font-sans text-sm text-gray-mid mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
