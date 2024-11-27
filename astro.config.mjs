import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions"; // Netlify adapter

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [
      {
        name: "vite-plugin-svgr",
        transform: (code, id) => {
          if (id.endsWith(".svg")) {
            return require("@svgr/webpack").loader(id);
          }
          return code;
        },
      },
    ],
  },
});
