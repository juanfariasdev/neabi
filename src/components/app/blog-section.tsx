'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search } from 'lucide-react';
import SectionHeader from './section-header';

interface BlogPost {
  id: string; // Identificador único do post (Slug é gerado a partir do título)
  category: string; // Categoria do post
  title: string; // Título do post
  imgUrl: string; // URL da imagem do post
  summary: string; // Resumo do post
  content: string; // Conteúdo completo do post
  date: string; // Vem sozinho do servidor
}


const blogPosts: BlogPost[] = [
  {
    id: 'blog-post-1',
    category: 'Análise',
    imgUrl: '',
    date: '15 de Julho, 2024',
    title: 'A Importância da Representatividade na Mídia',
    summary: 'Uma análise aprofundada sobre como a representação de pessoas negras e indígenas na mídia impacta a sociedade.',
    content: 'Uma análise aprofundada sobre como a representação de pessoas negras e indígenas na mídia impacta a sociedade.'
  },
  {
    id: 'blog-post-2',
    category: 'Educação',
    imgUrl: '',
    date: '10 de Julho, 2024',
    title: 'Implementando a Lei 10.639/03 na Prática',
    summary: 'Dicas e recursos para educadores aplicarem o ensino da história e cultura afro-brasileira em sala de aula.',
    content: 'Dicas e recursos para educadores aplicarem o ensino da história e cultura afro-brasileira em sala de aula.',

  },
  {
    id: 'blog-post-3',
    category: 'Cultura',
    imgUrl: '',
    date: '05 de Julho, 2024',
    title: 'A Herança dos Quilombos no Brasil Contemporâneo',
    summary: 'Explore a rica herança cultural e política das comunidades quilombolas e sua relevância hoje.',
    content: 'Explore a rica herança cultural e política das comunidades quilombolas e sua relevância hoje.',
    
  },
];

export default function BlogSection() {
  return (
    <section id="blog-section" className="w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeader title="Blog & Notícias" />
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-12">
            <div className="relative w-full max-w-sm">
                <Input placeholder="Pesquisar no blog..." className="pl-10 h-11" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex gap-2">
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">Análise</Button>
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">Educação</Button>
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">Cultura</Button>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => {
            const image = PlaceHolderImages.find(img => img.id === post.id);
            return (
              <Card key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {image && (
                  <div className="relative w-full aspect-video">
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardContent className="p-6 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-2">{post.date} • <span className="text-primary font-semibold">{post.category}</span></p>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-3 h-16">{post.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-grow">{post.summary}</p>
                  <Link href={`/blog/` + post.id} className="font-accent font-bold text-sm text-primary hover:underline self-start mt-auto">
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
