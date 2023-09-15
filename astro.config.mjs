import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    sitemap(), 
    react(), 
    tailwind({
    configFile: './tailwind.config.cjs',
  }), 
  partytown(), 
  solidJs()
],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});