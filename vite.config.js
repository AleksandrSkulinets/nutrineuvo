import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 👇 This must match your ReactPress app directory
  base: "/wp-content/reactpress/apps/nutrineuvo/build/",
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});
