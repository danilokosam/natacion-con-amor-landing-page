// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // Replace later.
  integrations: [preact(), icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
