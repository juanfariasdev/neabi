'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-post-1',
    category: 'Análise',
    date: '15 de Julho, 2024',
    title: 'A Importância da Representatividade na Mídia',
    summary: 'Uma análise aprofundada sobre como a representação de pessoas negras e indígenas na mídia impacta a sociedade.',
    href: '#',
  },
  {
    id: 'blog-post-2',
    category: 'Educação',
    date: '10 de Julho, 2024',
    title: 'Implementando a Lei 10.639/03 na Prática',
    summary: 'Dicas e recursos para educadores aplicarem o ensino da história e cultura afro-brasileira em sala de aula.',
    href: '#',
  },
  {
    id: 'blog-post-3',
    category: 'Cultura',
    date: '05 de Julho, 2024',
    title: 'A Herança dos Quilombos no Brasil Contemporâneo',
    summary: 'Explore a rica herança cultural e política das comunidades quilombolas e sua relevância hoje.',
    href: '#',
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[#f8f7f4] py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
            Blog & Notícias
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative w-full max-w-sm">
                <Input placeholder="Pesquisar no blog..." className="pl-10" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex gap-2">
                <Button variant="ghost">Análise</Button>
                <Button variant="ghost">Educação</Button>
                <Button variant="ghost">Cultura</Button>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => {
            const image = PlaceHolderImages.find(img => img.id === post.id);
            return (
              <Card key={post.id} className="overflow-hidden group rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg">
                {image && (
                  <div className="relative w-full h-44 md:h-48">
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardContent className="p-5 flex flex-col">
                  <p className="font-body text-xs text-muted-foreground mb-2">{post.date} • {post.category}</p>
                  <h3 className="font-headline text-lg font-bold text-[#1a1a1a] mb-3 h-14 overflow-hidden">{post.title}</h3>
                  <p className="font-body text-sm text-[#1a1a1a]/80 leading-relaxed mb-4 h-20 overflow-hidden">{post.summary}</p>
                  <Link href={post.href} className="font-accent font-bold text-sm text-[#D4AF37] hover:underline self-start mt-auto">
                    Leia Mais
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}