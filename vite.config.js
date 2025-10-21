// vite.config.js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // ✅ Load .env based on mode (development / production)
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_PUBLIC_BASE || "/"; // reads .env.production in build

  return {
    plugins: [react(), tailwindcss()],
    server: { port: 5174 },
    base, // <-- THIS will be "/wp-content/reactpress/apps/nutrineuvo/build/" in prod
    build: {
      outDir: "build",
      emptyOutDir: true,
    },
  };
});
