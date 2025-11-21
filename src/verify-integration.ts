import { getBlogPosts, getTimelineEvents, getVideos } from "./lib/prismic-utils";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function verifyUtils() {
  try {
    console.log("Fetching Blog Posts...");
    const posts = await getBlogPosts();
    console.log(`Fetched ${posts.length} posts.`);

    console.log("Fetching Timeline Events...");
    const events = await getTimelineEvents();
    console.log(`Fetched ${events.length} events.`);

    console.log("Fetching Videos...");
    const videos = await getVideos();
    console.log(`Fetched ${videos.length} videos.`);

  } catch (error) {
    console.error("Verification failed:", error);
    process.exit(1);
  }
}

verifyUtils();
