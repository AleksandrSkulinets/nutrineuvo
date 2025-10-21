import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
  },
  // 👇 this is the key fix for ReactPress
  base: "/wp-content/reactpress/apps/nutrineuvo/build/",
  build: {
    outDir: "dist",
  },
});
