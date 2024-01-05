/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/__vitest__/setup/dom.ts"],
    exclude: ["dist", "node_modules"],
    passWithNoTests: true,
    coverage: {
      exclude: ["src/__vitest__/**"],
    },
    threads: false,
  },
});
