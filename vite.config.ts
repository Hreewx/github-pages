import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
});
