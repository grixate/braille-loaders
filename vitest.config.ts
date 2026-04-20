import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@dot-loaders/core": fileURLToPath(new URL("./packages/core/src/index.ts", import.meta.url)),
      "@dot-loaders/presets": fileURLToPath(new URL("./packages/presets/src/index.ts", import.meta.url)),
      "@dot-loaders/react": fileURLToPath(new URL("./packages/react/src/index.ts", import.meta.url))
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      enabled: false
    }
  }
});
