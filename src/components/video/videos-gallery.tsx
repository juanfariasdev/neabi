"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Video, PaginatedVideos } from "@/lib/prismic-utils";
import { SequentialVideoGrid } from "./sequential-video-grid";
import { TikTokIcon, InstagramIcon } from "./video-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowUp, RefreshCw, Film } from "lucide-react";

type FilterType = "all" | "tiktok" | "instagram";

interface VideosGalleryProps {
  initialVideos?: Video[];
  initialHasMore?: boolean;
}

const PAGE_SIZE = 6;
const CACHE_PREFIX = "neabi_videos_v1";

export function VideosGallery({
  initialVideos = [],
  initialHasMore = true,
}: VideosGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [videos, setVideos] = useState<Video[]>(initialVideos);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const isFetchingRef = useRef<boolean>(false);

  // Helper to read from client cache
  const getCachedPage = (filter: FilterType, pageNum: number): PaginatedVideos | null => {
    if (typeof window === "undefined") return null;
    try {
      const cached = sessionStorage.getItem(`${CACHE_PREFIX}_${filter}_p${pageNum}`);
      if (cached) {
        return JSON.parse(cached) as PaginatedVideos;
      }
    } catch {
      // Ignore cache read errors
    }
    return null;
  };

  // Helper to write to client cache
  const setCachedPage = (filter: FilterType, pageNum: number, data: PaginatedVideos) => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(`${CACHE_PREFIX}_${filter}_p${pageNum}`, JSON.stringify(data));
    } catch {
      // Ignore quota errors
    }
  };

  // Fetch a specific page for a given filter
  const fetchPage = useCallback(
    async (
      targetFilter: FilterType,
      targetPage: number,
      isNextPage: boolean = false
    ) => {
      if (isFetchingRef.current) return;
      isFetchingRef.current = true;
      setError(null);

      if (isNextPage) {
        setIsLoadingMore(true);
      } else {
        setIsLoadingInitial(true);
      }

      try {
        // 1. Try client cache first
        const cached = getCachedPage(targetFilter, targetPage);
        let result: PaginatedVideos;

        if (cached) {
          result = cached;
        } else {
          // 2. Fetch from cached API endpoint
          const res = await fetch(
            `/api/videos?page=${targetPage}&limit=${PAGE_SIZE}&type=${targetFilter}`
          );
          if (!res.ok) {
            throw new Error(`Falha ao carregar vídeos: ${res.statusText}`);
          }
          result = await res.json();
          setCachedPage(targetFilter, targetPage, result);
        }

        setVideos((prev) => {
          if (targetPage === 1) {
            return result.videos;
          }
          // Avoid duplicate videos if any exist
          const existingIds = new Set(prev.map((v) => v.id || v.url));
          const newVideos = result.videos.filter(
            (v) => !existingIds.has(v.id || v.url)
          );
          return [...prev, ...newVideos];
        });

        setPage(targetPage);
        setHasMore(result.hasMore);
      } catch (err: unknown) {
        console.error("Error loading videos:", err);
        setError("Não foi possível carregar os vídeos. Tente novamente.");
      } finally {
        setIsLoadingInitial(false);
        setIsLoadingMore(false);
        isFetchingRef.current = false;
      }
    },
    []
  );

  // When filter changes, reset and load page 1 for that filter
  const handleFilterChange = (newFilter: FilterType) => {
    if (newFilter === activeFilter) return;
    setActiveFilter(newFilter);
    setVideos([]);
    setPage(1);
    setHasMore(true);
    fetchPage(newFilter, 1, false);
  };

  // Initial load if no server-provided videos
  useEffect(() => {
    if (initialVideos.length === 0) {
      fetchPage("all", 1, false);
    }
  }, [fetchPage, initialVideos.length]);

  // Infinite Scroll IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (
          entry.isIntersecting &&
          hasMore &&
          !isLoadingMore &&
          !isLoadingInitial &&
          !isFetchingRef.current
        ) {
          fetchPage(activeFilter, page + 1, true);
        }
      },
      {
        root: null,
        rootMargin: "350px", // Trigger slightly before user hits the bottom
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, isLoadingInitial, activeFilter, page, fetchPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category Filter Bar */}
      <div className="w-full max-w-xl mb-12 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-muted/60 backdrop-blur-sm rounded-2xl border border-border/60">
        <Button
          variant={activeFilter === "all" ? "default" : "ghost"}
          size="sm"
          onClick={() => handleFilterChange("all")}
          className="rounded-xl flex items-center gap-2 px-5 py-2 font-medium text-sm transition-all"
        >
          <Film className="w-4 h-4" />
          <span>Todos</span>
        </Button>

        <Button
          variant={activeFilter === "tiktok" ? "default" : "ghost"}
          size="sm"
          onClick={() => handleFilterChange("tiktok")}
          className="rounded-xl flex items-center gap-2 px-5 py-2 font-medium text-sm transition-all"
        >
          <TikTokIcon className="w-4 h-4" />
          <span>TikTok</span>
        </Button>

        <Button
          variant={activeFilter === "instagram" ? "default" : "ghost"}
          size="sm"
          onClick={() => handleFilterChange("instagram")}
          className="rounded-xl flex items-center gap-2 px-5 py-2 font-medium text-sm transition-all"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>Instagram</span>
        </Button>
      </div>

      {/* Videos List with Sequential Loading */}
      {isLoadingInitial ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-[325px] min-h-[520px] rounded-2xl bg-card border border-border/60 p-6 flex flex-col items-center justify-center gap-4 animate-pulse"
            >
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div className="h-4 w-32 bg-muted rounded" />
              <div className="h-2 w-24 bg-muted rounded" />
            </div>
          ))}
        </div>
      ) : (
        <SequentialVideoGrid
          videos={videos}
          emptyMessage="Nenhuma publicação encontrada para este filtro."
        />
      )}

      {/* Loading indicator for next page */}
      {isLoadingMore && (
        <div className="w-full flex flex-col items-center justify-center py-12 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm font-medium text-muted-foreground animate-pulse">
            Carregando mais vídeos de forma assíncrona...
          </p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="w-full max-w-md my-8 p-6 bg-destructive/10 border border-destructive/20 rounded-2xl text-center space-y-3">
          <p className="text-sm font-medium text-destructive">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchPage(activeFilter, page, false)}
            className="flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Tentar novamente</span>
          </Button>
        </div>
      )}

      {/* Infinite Scroll Sentinel element */}
      <div ref={sentinelRef} className="h-8 w-full" aria-hidden="true" />

      {/* End of content indicator */}
      {!hasMore && videos.length > 0 && !isLoadingInitial && (
        <div className="w-full max-w-md my-12 py-8 px-6 bg-card rounded-2xl border border-border/60 text-center space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
            ✓
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-base text-foreground">
              Você chegou ao fim!
            </h4>
            <p className="text-xs text-muted-foreground">
              Todas as {videos.length} publicações disponíveis foram carregadas.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="rounded-xl flex items-center gap-2 mx-auto text-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Voltar ao topo</span>
          </Button>
        </div>
      )}
    </div>
  );
}

