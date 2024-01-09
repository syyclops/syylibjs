/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./__vitest__/setup/dom.ts"],
    exclude: [...configDefaults.exclude, "dist", "node_modules"],
    passWithNoTests: true,
    coverage: {
      exclude: ["__vitest__/**"],
    },
    threads: false,
  },
});
