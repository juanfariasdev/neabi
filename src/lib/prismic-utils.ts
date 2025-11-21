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
  type: "tiktok" | "instagram";
  url: string;
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
  const {type, url} = data;

  const Video = {
    type: String(type).toLocaleLowerCase(),
    url,
  } as Video

  return Video;
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

export const getVideos = async (): Promise<Video[]> => {
  const client = createPrismicClient();
  try {
    // Assuming 'post' type is used for videos/social media
    const response = await client.getByType("post", {
      pageSize: 10,
    });
    // console.log("Fetched video documents:", response.results);
    return response.results.map(mapVideo);
  } catch (error) {
    console.error("Failed to fetch videos:", error);
    return [];
  }
};
