import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // test
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE || "/",
    plugins: [vue()],
  };
});
