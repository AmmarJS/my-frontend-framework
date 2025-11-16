import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "html-as-string-loader",
      transform(code, id) {
        if (!id.endsWith(".page.html")) return;

        return {
          code: `export default ${JSON.stringify(code)};`,
          map: null
        };
      },
    },
  ],
});