// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tailwind from "eslint-plugin-tailwindcss";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...{
    ...tailwind.configs["flat/recommended"],
    rules: {
      "react/no-custom-classname": "off",
    },
  },
);

// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// import eslintPluginPrettier from "eslint-plugin-prettier";

// export default {
//   files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.css"],
//   languageOptions: { globals: globals.browser },
//   plugins: {
//     "@typescript-eslint": tseslint,
//     "react": pluginReact,
//     "prettier": eslintPluginPrettier,
//     "tailwindcss": tailwind
//   },
//   ...tseslint.configs.recommended,
//   // ...pluginReact.configs.recommended,
//   // ...eslintPluginPrettier.configs.recommended,
//   // ...tailwind.configs["flat/recommended"],
//   rules: {
//     "react/jsx-props-no-spreading": "off"
//   }
// };