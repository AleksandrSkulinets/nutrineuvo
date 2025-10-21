// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const basePath =
    process.env.PUBLIC_URL || // ✅ use env var if provided (from CI/CD)
    (mode === "development"
      ? "/" // local dev
      : "/wp-content/reactpress/apps/nutrineuvo/build/"); // default production path

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 5174,
    },
    base: basePath,
    build: {
      outDir: "build",
      emptyOutDir: true,
    },
  };
});
