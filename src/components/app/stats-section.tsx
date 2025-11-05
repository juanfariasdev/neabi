"use client";

import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 100, suffix: "+", label: "NEABIs em todo o país" },
  { value: 66, suffix: "", label: "Anos de História" },
  { value: 10000, suffix: "+", label: "Alunos Apoiados" },
  { value: 40, suffix: "+", label: "Publicações de Pesquisa" },
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
      setCount(Math.floor(progress * (to - start) + start));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [to]);

  return <span className="font-headline text-5xl md:text-6xl font-bold text-primary">{count.toLocaleString()}{suffix}</span>;
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
    <section ref={ref} className="w-full bg-foreground text-background py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-repeat opacity-[0.03]" 
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}
        />
      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              {isInView && <Counter to={stat.value} suffix={stat.suffix} />}
              <p className="mt-2 text-lg font-accent font-bold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
