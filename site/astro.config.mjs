// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
import { defineConfig } from "astro/config";

export default defineConfig({
  // Project pages on GitHub need a sub-path; default stays the site root.
  base: process.env.DEMO_BASE ? `/${process.env.DEMO_BASE}` : "/",
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
