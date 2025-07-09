import js from "@eslint/js";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

const importPlugin = await import("eslint-plugin-import");
const prettierPlugin = await import("eslint-plugin-prettier");

export default [
  js.configs.recommended,
  {
    name: "typescript-and-custom-rules",
    files: ["**/*.ts", "**/*.tsx"],
    ignores: [
      "node_modules",
      ".next",
      "out",
      "dist",
      "public",
      "coverage",
      "*.config.js",
    ],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: 2021,
      },
      globals: {
        process: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.default,
      import: importPlugin.default,
      prettier: prettierPlugin.default,
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      "prettier/prettier": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  },
];
