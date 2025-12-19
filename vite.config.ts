import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  root: path.resolve(__dirname, "client"),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "client", "attached_assets")
    }
  },

  css: {
    postcss: {}
  },

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  },

  server: {
    port: 5173
  }
});
