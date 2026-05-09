// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://pablo-rojas-dev.github.io',
  base: '/',
  server: {
    host: true,
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()],
  }
});