import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  base: "/p5p/h1/", // Ensure it matches your GitHub repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define the alias for the `src` folder
    },
  },
});
