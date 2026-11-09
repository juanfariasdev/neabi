"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Video } from "@/lib/prismic-utils";
import { SequentialVideoGrid } from "@/components/video/sequential-video-grid";
import { TikTokIcon, InstagramIcon } from "@/components/video/video-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Sparkles } from "lucide-react";

interface VideoSectionProps {
  videos?: Video[];
}

export default function VideoSection({ videos = [] }: VideoSectionProps) {
  // Sort and extract the latest 5 videos for TikTok and Instagram
  const { tiktokVideos, instagramVideos } = useMemo(() => {
    // Sort descending by publication date
    const sorted = [...videos].sort((a, b) => {
      const dateA = new Date(a.firstPublicationDate || 0).getTime();
      const dateB = new Date(b.firstPublicationDate || 0).getTime();
      return dateB - dateA;
    });

    const tiktok = sorted
      .filter((video) => video.type === "tiktok")
      .slice(0, 5);

    const instagram = sorted
      .filter((video) => video.type === "instagram")
      .slice(0, 5);

    return {
      tiktokVideos: tiktok,
      instagramVideos: instagram,
    };
  }, [videos]);

  const defaultTab = tiktokVideos.length > 0 ? "tiktok" : "instagram";

  return (
    <section
      id="videos-section"
      className="w-full py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-warm-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conteúdos Digitais</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-deep-black mb-4 leading-tight">
            Vozes na rede
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Confira as 5 publicações mais recentes produzidas pelo NEABI no TikTok e no Instagram. Os vídeos são renderizados sequencialmente para uma navegação fluida e rápida.
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground bg-card/40 rounded-2xl border border-dashed border-border/80 max-w-md mx-auto p-8">
            <p className="text-base font-medium">Nenhum vídeo publicado no momento.</p>
          </div>
        ) : (
          <Tabs defaultValue={defaultTab} className="w-full flex flex-col items-center">
            {/* Platform Selection Tabs */}
            <TabsList className="mb-10 p-1.5 h-auto bg-muted/70 backdrop-blur-sm rounded-2xl border border-border/60 gap-1">
              <TabsTrigger
                value="tiktok"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                <TikTokIcon className="w-4 h-4 text-foreground" />
                <span>TikTok</span>
                <Badge
                  variant="secondary"
                  className="ml-1 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                >
                  {tiktokVideos.length} recentes
                </Badge>
              </TabsTrigger>

              <TabsTrigger
                value="instagram"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-primary" />
                <span>Instagram</span>
                <Badge
                  variant="secondary"
                  className="ml-1 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                >
                  {instagramVideos.length} recentes
                </Badge>
              </TabsTrigger>
            </TabsList>

            {/* TikTok Tab Content: Last 5 Videos */}
            <TabsContent value="tiktok" className="w-full mt-0 focus-visible:outline-none">
              <SequentialVideoGrid
                videos={tiktokVideos}
                emptyMessage="Nenhum vídeo recente do TikTok encontrado."
              />
            </TabsContent>

            {/* Instagram Tab Content: Last 5 Videos */}
            <TabsContent value="instagram" className="w-full mt-0 focus-visible:outline-none">
              <SequentialVideoGrid
                videos={instagramVideos}
                emptyMessage="Nenhum vídeo recente do Instagram encontrado."
              />
            </TabsContent>
          </Tabs>
        )}

        {/* Call to Action for Full Video Gallery */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6 bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-semibold text-lg md:text-xl text-foreground flex items-center justify-center sm:justify-start gap-2">
              <Film className="w-5 h-5 text-primary" />
              <span>Explore todo o nosso acervo</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl">
              Acesse a nova página dedicada com carregamento contínuo e assíncrono para navegar por todos os vídeos publicados.
            </p>
          </div>

          <Button asChild size="lg" className="rounded-xl shrink-0 group">
            <Link href="/videos" className="flex items-center gap-2">
              <span>Ver todos os vídeos</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
