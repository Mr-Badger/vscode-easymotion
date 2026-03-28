// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(eslint.configs.recommended, tseslint.configs.recommended, {
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "brace-style": ["error", "allman"],
    indent: ["error", 4],
  },
});
