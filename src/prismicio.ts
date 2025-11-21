import { createClient, type ClientConfig } from "@prismicio/client";

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME || "prismic-neabi";

const routes: ClientConfig["routes"] = [
  // Examples:
  // {
  // 	type: "homepage",
  // 	path: "/",
  // },
  // {
  // 	type: "page",
  // 	path: "/:uid",
  // },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createPrismicClient = (config: ClientConfig = {}) => {
  const client = createClient(repositoryName, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  });

  return client;
};
