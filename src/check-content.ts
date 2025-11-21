import { createPrismicClient } from "./prismicio";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function checkContent() {
  try {
    const client = createPrismicClient();
    const types = ["blogpost", "post", "timelineevent"];

    for (const type of types) {
        const response = await client.getByType(type, { pageSize: 1 });
        console.log(`Type: ${type}, Count: ${response.total_results_size}`);
        if (response.results.length > 0) {
            console.log(`Sample Data for ${type}:`, JSON.stringify(response.results[0].data, null, 2));
        }
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

checkContent();
