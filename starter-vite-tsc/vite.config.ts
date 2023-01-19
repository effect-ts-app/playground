import { defineConfig } from "vite";
import { effectPlugin } from "@effect/vite-plugin-react";
// import { tsPlugin as effectPlugin } from "@effect-app/compiler/vitePlugin";


export default defineConfig({
  plugins: [
    effectPlugin({
      babel: {
        plugins: ["babel-plugin-annotate-pure-calls"],
      },
    }),
  ],
});
