import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://pharefantome.com/",
  output: "server",
  adapter: netlify(),
});
