'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search } from 'lucide-react';
import SectionHeader from './section-header';
import { BlogPost } from '@/lib/prismic-utils';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts = [] }: BlogSectionProps) {
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
          {posts.length === 0 ? (
            <p className="text-center col-span-full text-muted-foreground">Nenhum post encontrado.</p>
          ) : (
            posts.map((post) => {
              // Fallback image logic could be improved, using placeholder for now if no image
              const image = PlaceHolderImages.find(img => img.id === post.id) || PlaceHolderImages[0];
              const imageUrl = post.imgUrl || image?.imageUrl;

              return (
                <Card key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-2">{post.date} • <span className="text-primary font-semibold">{post.category}</span></p>
                    <h3 className="font-headline text-xl font-bold text-foreground mb-3 h-16">{post.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">{post.summary}</p>
                    <Link href={`/blog/` + post.id} className="font-accent font-bold text-sm text-primary hover:underline self-start mt-auto">
                      Leia Mais
                    </Link>
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </div>
    </section>
  );
}
