import { defineConfig } from "windicss/helpers";

export default defineConfig({
  preflight: false,
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
});
