import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/app/header";
import Footer from "@/components/app/footer";
import { VideosGallery } from "@/components/video/videos-gallery";
import { getPaginatedVideos } from "@/lib/prismic-utils";
import { ArrowLeft, Film, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeria de Vídeos | NEABI",
  description:
    "Explore todas as produções audiovisuais, debates e conteúdos educativos do NEABI no TikTok e Instagram.",
};

export const revalidate = 3600; // Cache this page for 1 hour

export default async function VideosPage() {
  const initialData = await getPaginatedVideos({
    page: 1,
    pageSize: 6,
    type: "all",
  });

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-warm-white/50">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1.5 px-3 rounded-lg hover:bg-muted/60"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a página inicial</span>
            </Link>
          </div>

          {/* Page Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acervo Audiovisual Completo</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-deep-black mb-4 leading-tight">
              Galeria de Vídeos
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Explore todas as publicações, reflexões e conteúdos educativos do
              NEABI nas redes sociais. Os vídeos carregam de forma contínua e
              assíncrona conforme você rola a página.
            </p>
          </div>

          {/* Videos Gallery Component with Infinite Scroll & Sequential Embeds */}
          <VideosGallery
            initialVideos={initialData.videos}
            initialHasMore={initialData.hasMore}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

