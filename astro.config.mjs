import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions"; // Netlify adapter
import ViteSvgr from "vite-plugin-svgr"; // Vite SVG plugin

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [
      ViteSvgr(), // Add the Vite SVG plugin
    ],
  },
});
