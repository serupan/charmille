import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import node from '@astrojs/node';
import netlify from "@astrojs/netlify";


// https://astro.build/config
export default defineConfig({
  site: "https://pharefantome.com/",
  integrations: [db()],
  output: "hybrid",
  adapter: netlify()
});