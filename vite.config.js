import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
  },
  base: process.env.VITE_PUBLIC_BASE || "/",
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
}));
