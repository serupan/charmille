import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site:"https://example.com",
  integrations: [db()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});