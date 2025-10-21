import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
  },
  base: "/wp-content/reactpress/apps/nutrineuvo/build/",
  build: {
    outDir: "build",
  },
});
