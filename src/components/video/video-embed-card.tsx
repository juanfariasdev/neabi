"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Video } from "@/lib/prismic-utils";
import { Badge } from "@/components/ui/badge";
import { TikTokIcon, InstagramIcon } from "./video-icons";
import { ExternalLink, Loader2, AlertCircle } from "lucide-react";

// Dynamic imports with ssr: false ensure no hydration mismatches
const TikTokEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.TikTokEmbed),
  { ssr: false }
);

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false }
);

export function getTikTokUsername(url: string): string {
  if (!url) return "@tiktok";
  const match = url.match(/@([a-zA-Z0-9_.-]+)/);
  return match ? `@${match[1]}` : "@tiktok";
}

interface VideoEmbedCardProps {
  video: Video;
  index: number;
  isActive: boolean;
  isLoaded: boolean;
  onLoaded: () => void;
}

export function VideoEmbedCard({
  video,
  index,
  isActive,
  isLoaded,
  onLoaded,
}: VideoEmbedCardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [embedReady, setEmbedReady] = useState(isLoaded);
  const notifiedRef = useRef(isLoaded);

  const isTikTok = video.type === "tiktok";
  const platformName = isTikTok ? "TikTok" : "Instagram";
  const username = isTikTok ? getTikTokUsername(video.url) : "Instagram Reel";
  const estimatedMinHeight = isTikTok ? "min-h-[580px]" : "min-h-[480px]";

  const notifyReady = useCallback(() => {
    if (!notifiedRef.current) {
      notifiedRef.current = true;
      setEmbedReady(true);
      onLoaded();
    }
  }, [onLoaded]);

  // Set mounted flag only on client after hydration is complete
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (isLoaded) {
      setEmbedReady(true);
      notifiedRef.current = true;
      return;
    }

    if (!isActive) return;

    // Advance queue after 1.5s to ensure sequential flow continues smoothly
    const fallbackTimer = setTimeout(notifyReady, 1500);

    const container = containerRef.current;
    if (!container) return;

    if (container.querySelector("iframe")) {
      clearTimeout(fallbackTimer);
      notifyReady();
      return;
    }

    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe")) {
        clearTimeout(fallbackTimer);
        notifyReady();
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [isMounted, isActive, isLoaded, notifyReady]);

  return (
    <div
      className={`w-full max-w-[325px] flex flex-col items-center transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-90"
      }`}
    >
      <div
        ref={containerRef}
        className={`w-[325px] ${estimatedMinHeight} relative rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm flex flex-col justify-start items-center`}
      >
        {/* Placeholder / Skeleton during queue waiting */}
        {(!isMounted || !isActive || !embedReady) && (
          <div className="absolute inset-0 z-10 flex flex-col justify-between items-center p-6 bg-card/95 backdrop-blur-sm text-center">
            {/* Header with platform badge */}
            <div className="w-full flex items-center justify-between">
              <Badge
                variant="secondary"
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold"
              >
                {isTikTok ? (
                  <TikTokIcon className="w-3.5 h-3.5 text-foreground" />
                ) : (
                  <InstagramIcon className="w-3.5 h-3.5 text-primary" />
                )}
                <span>{platformName}</span>
              </Badge>
              <span className="text-[11px] font-medium text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
                #{index + 1}
              </span>
            </div>

            {/* Middle state: Waiting vs Loading */}
            <div className="flex flex-col items-center gap-3 my-auto">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                  isActive && isMounted
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isActive && isMounted ? (
                  <Loader2 className="w-7 h-7 animate-spin text-primary" />
                ) : isTikTok ? (
                  <TikTokIcon className="w-7 h-7" />
                ) : (
                  <InstagramIcon className="w-7 h-7" />
                )}
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">
                  {isActive && isMounted
                    ? "Carregando publicação..."
                    : "Aguardando na fila..."}
                </p>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  {username}
                </p>
              </div>

              {/* Progress shimmer indicator */}
              <div className="w-36 h-1.5 bg-muted rounded-full overflow-hidden mt-1">
                <div
                  className={`h-full rounded-full ${
                    isActive && isMounted
                      ? "bg-primary w-full animate-pulse"
                      : "bg-muted-foreground/30 w-1/3"
                  }`}
                />
              </div>
            </div>

            {/* Direct Link fallback */}
            <div className="w-full pt-3 border-t border-border/40 flex justify-center">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-muted/50"
              >
                <span>Assistir no {platformName}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Real Embed (Mounted strictly client-side after hydration) */}
        {isMounted && isActive && (
          <div className="w-[325px] flex flex-col justify-center items-center">
            {isTikTok ? (
              <TikTokEmbed
                url={video.url}
                width={325}
                retryDisabled={true}
              />
            ) : (
              <InstagramEmbed
                url={video.url}
                width={325}
                retryDisabled={true}
              />
            )}
          </div>
        )}
      </div>

      {/* Persistent direct fallback button below card in case browser privacy shields block TikTok */}
      {isTikTok && (
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-[11px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          <span>Abrir {username} diretamente no TikTok</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}
