// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://pablo-rojas-dev.github.io',
  base: '/my-web',
  server: {
    host: true,
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()],
  }
});