// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mirzamuric.com",
  integrations: [tailwind(), sitemap(), mdx()],
  output: "static",
  server: {
    headers: {
      // Only apply no-cache headers in development
      ...(process.env.NODE_ENV === "development"
        ? {
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          }
        : {}),
    },
  },
});
