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
