"use client";

import { useState, useEffect, useRef } from 'react';

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

  return <span className="font-headline text-4xl md:text-5xl font-bold text-gold mb-3">{count.toLocaleString()}{suffix}</span>;
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
    <section ref={ref} className="w-full bg-cream-bg py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center bg-white rounded-lg p-8 shadow-sm border-t-4 border-gold">
              {isInView && <Counter to={stat.value} suffix={stat.suffix} />}
              <p className="mt-2 text-base md:text-lg font-medium text-dark-bg">{stat.label}</p>
              <p className="text-sm text-gray-mid mt-2 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
