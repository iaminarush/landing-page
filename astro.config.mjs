import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://iaminarush.github.io",
  base: "/landing-page",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});