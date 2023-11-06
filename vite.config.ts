import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import * as path from "path";

const isProduction = process.env.NODE_ENV === 'production';

const buildOptions = isProduction && {
  lib: {
    entry: path.resolve(__dirname, "src/lib/index.tsx"),
    name: "index",
    fileName: "index",
  },
  rollupOptions: {
    external: ["react"],
    output: {
      globals: {
        react: "React",
      },
    },
  },
  commonjsOptions: {
    esmExternals: ["react"],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  base: "/external-state/",
  build: buildOptions,
})
