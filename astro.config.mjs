import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import db from "@astrojs/db";

export default defineConfig({
  site: "https://pharefantome.com/",
  output: "server",
  adapter: netlify(),
  integrations: [db()],
});
