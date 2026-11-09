"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Video } from "@/lib/prismic-utils";
import { VideoEmbedCard } from "./video-embed-card";

interface SequentialVideoGridProps {
  videos: Video[];
  emptyMessage?: string;
}

export function SequentialVideoGrid({
  videos,
  emptyMessage = "Nenhum vídeo disponível no momento.",
}: SequentialVideoGridProps) {
  const [activeQueueIndex, setActiveQueueIndex] = useState(0);
  const [loadedUrls, setLoadedUrls] = useState<Set<string>>(new Set());

  // Handle when a video item finishes rendering or fallback timer triggers
  const handleItemLoaded = useCallback((url: string) => {
    setLoadedUrls((prev) => {
      const next = new Set(prev);
      next.add(url);
      return next;
    });
    setActiveQueueIndex((prev) => prev + 1);
  }, []);

  // When videos array changes completely (e.g. different category filter),
  // reset queue index to start loading from the first unrendered item
  useEffect(() => {
    // Find the first index in `videos` that hasn't been loaded yet
    const firstUnloadedIndex = videos.findIndex((v) => !loadedUrls.has(v.url));
    if (firstUnloadedIndex !== -1) {
      setActiveQueueIndex(firstUnloadedIndex);
    } else {
      setActiveQueueIndex(videos.length);
    }
  }, [videos, loadedUrls]);

  if (videos.length === 0) {
    return (
      <div className="py-12 text-center text-muted-foreground bg-card/40 rounded-2xl border border-dashed border-border/80 max-w-md mx-auto p-8">
        <p className="text-base font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
      {videos.map((video, index) => {
        const isLoaded = loadedUrls.has(video.url);
        const isActive = isLoaded || index <= activeQueueIndex;

        return (
          <VideoEmbedCard
            key={video.id || video.url}
            video={video}
            index={index}
            isActive={isActive}
            isLoaded={isLoaded}
            onLoaded={() => handleItemLoaded(video.url)}
          />
        );
      })}
    </div>
  );
}

