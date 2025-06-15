import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Final Vite config for GitHub Pages deployment
export default defineConfig({
  base: "/clean-track-mangaluru/", // ✅ Required for GitHub Pages to load correctly

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ Simplified imports using "@"
    },
  },

  build: {
    sourcemap: true, // ✅ Helps debug errors in production
    outDir: "dist", // Optional: default is "dist"
  },

  plugins: [react()],
});
