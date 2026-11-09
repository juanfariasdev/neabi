import { createPrismicClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

// Define interfaces for the application data
export interface BlogPost {
  id: string;
  category: string;
  title: string;
  imgUrl: string;
  summary: string;
  content: string;
  date: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

export interface Video {
  id: string;
  type: "tiktok" | "instagram";
  url: string;
  firstPublicationDate: string;
}

export interface PaginatedVideos {
  videos: Video[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasMore: boolean;
}

// Helper to map Prismic documents to application interfaces
// Note: These mappings are assumptions based on typical Prismic structures and the current UI.
// They will need to be adjusted once real data is available and field names are confirmed.

const mapBlogPost = (doc: prismic.PrismicDocument): BlogPost => {
  const data = doc.data;
  return {
    id: doc.id,
    category: prismic.asText(data.category) || "Geral",
    title: prismic.asText(data.title) || "Sem título",
    imgUrl: prismic.isFilled.image(data.image) ? data.image.url : "",
    summary: prismic.asText(data.summary) || "",
    content: prismic.asText(data.content) || "",
    date: prismic.asDate(doc.first_publication_date)?.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }) || "",
  };
};

const mapTimelineEvent = (doc: prismic.PrismicDocument): TimelineEvent => {
  const { data } = doc;
  console.log("Mapping timeline event data:", data);
  return {
    year: prismic.asDate(data.year)?.getFullYear().toString() || new Date().getFullYear().toString(),
    title: prismic.asText(data.title) || "Evento",
    description: prismic.asText(data.description) || "",
    link: prismic.asLink(data.link) || "#",
    color: data.color || "gold", // Assuming a select or text field for color
  };
};

const mapVideo = (doc: prismic.PrismicDocument): Video => {
  const { data } = doc;
  const { type, url } = data;

  const rawType = String(type || "").toLowerCase().trim();
  const normalizedType: "tiktok" | "instagram" = rawType.includes("tiktok")
    ? "tiktok"
    : "instagram";

  return {
    id: doc.id,
    type: normalizedType,
    url: String(url || "").trim(),
    firstPublicationDate: doc.first_publication_date || new Date().toISOString(),
  };
};

const fetchVideosFromPrismic = async (): Promise<Video[]> => {
  const client = createPrismicClient();
  try {
    const response = await client.getByType("post", {
      orderings: [
        {
          field: "document.first_publication_date",
          direction: "desc",
        },
      ],
      pageSize: 100,
    });
    return response.results.map(mapVideo);
  } catch (error) {
    console.error("Failed to fetch videos from Prismic:", error);
    return [];
  }
};

let cachedVideosFetcher: (() => Promise<Video[]>) | null = null;

export const getVideos = async (): Promise<Video[]> => {
  if (typeof window === "undefined") {
    try {
      if (!cachedVideosFetcher) {
        const { unstable_cache } = await import("next/cache");
        cachedVideosFetcher = unstable_cache(
          fetchVideosFromPrismic,
          ["prismic-all-videos"],
          { revalidate: 3600, tags: ["videos"] }
        );
      }
      return await cachedVideosFetcher();
    } catch {
      return await fetchVideosFromPrismic();
    }
  }
  return await fetchVideosFromPrismic();
};

export const getLatestVideosByPlatform = async (limit = 5) => {
  const allVideos = await getVideos();
  const tiktok = allVideos
    .filter((v) => v.type === "tiktok")
    .slice(0, limit);
  const instagram = allVideos
    .filter((v) => v.type === "instagram")
    .slice(0, limit);

  return { tiktok, instagram };
};

export const getPaginatedVideos = async ({
  type = "all",
  page = 1,
  pageSize = 6,
}: {
  type?: "all" | "tiktok" | "instagram";
  page?: number;
  pageSize?: number;
} = {}): Promise<PaginatedVideos> => {
  const allVideos = await getVideos();
  const filtered =
    type === "all"
      ? allVideos
      : allVideos.filter((v) => v.type === type);

  const total = filtered.length;
  const safePage = Math.max(1, page);
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.ceil(total / safePageSize) || 1;
  const startIndex = (safePage - 1) * safePageSize;
  const videos = filtered.slice(startIndex, startIndex + safePageSize);
  const hasMore = safePage < totalPages;

  return {
    videos,
    total,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
    hasMore,
  };
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const client = createPrismicClient();
  try {
    const response = await client.getByType("blogpost", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
      pageSize: 3, // Limit to 3 for the home page section
    });
    return response.results.map(mapBlogPost);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
};

export const getTimelineEvents = async (): Promise<TimelineEvent[]> => {
  const client = createPrismicClient();
  try {
    const response = await client.getByType("timelineevent", {
      orderings: {
        field: "my.timelineevent.year", // Assuming 'year' is a sortable field
        direction: "desc",
      },
    });
    return response.results.map(mapTimelineEvent);
  } catch (error) {
    console.error("Failed to fetch timeline events:", error);
    return [];
  }
};


