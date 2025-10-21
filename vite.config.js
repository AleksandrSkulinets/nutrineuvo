// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const basePath =
    process.env.PUBLIC_URL ||
    "/wp-content/reactpress/apps/nutrineuvo/build/";

  console.log(`✅ Using base path: ${basePath}`);

  return {
    plugins: [react(), tailwindcss()],
    base: basePath,
    server: {
      port: 5174,
    },
    build: {
      outDir: "build",
      emptyOutDir: true,
    },
  };
});
