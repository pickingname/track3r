import { defineConfig } from "vite";

export default defineConfig({
  // base: "/track3r/", prefered to use nothing ++
  plugins: [
    // plugins
  ],
  server: {
    host: true,
    port: 5173, // change port number if you prefer
  },
  rewrite: {
    '^/pages/(.*)\\.html': '/pages/$1',
  },
});