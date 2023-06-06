import { defineConfig } from "vite";

export default defineConfig({
  base: "/track3r/",
  plugins: [
    // plugins
  ],
  server: {
    host: true,
    port: 5173, // change port number if you prefer
  },
});