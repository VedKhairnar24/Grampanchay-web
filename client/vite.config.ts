import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugins/vite-plugin-meta-images";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    metaImagesPlugin(),
  ],

  // Running from inside the `client/` folder

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "..", "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },

  css: {
    postcss: {}
  },

  build: {
    outDir: path.resolve(__dirname, "..", "dist"),
    emptyOutDir: true
  },

  server: {
    port: 5173
  }
});
