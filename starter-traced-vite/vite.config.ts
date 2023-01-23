import { defineConfig } from "vite";
import { effectPlugin } from "@effect-app/compiler/vitePlugin2";


export default defineConfig({
  plugins: [
    effectPlugin({ enableTempFiles: true}),
  ],
});
