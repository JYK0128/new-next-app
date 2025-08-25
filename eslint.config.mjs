// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import storybook from "eslint-plugin-storybook";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const eslintConfig = [
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["./src/components/shadcn/**", "./src/.generated/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  stylistic.configs["recommended"],
  sonarjs.configs["recommended"],
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    rules: {
      /* eslint */
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      /* sonarjs */
      "sonarjs/no-small-switch": "off",
      "sonarjs/no-nested-functions": "warn",
      "sonarjs/no-unused-vars": "off",
      "sonarjs/no-dead-store": "off",
      "sonarjs/no-nested-conditional": "warn",
      "sonarjs/table-header": "off",

      /* @stylistic - recommended */
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/no-multi-spaces": ["error",
        { ignoreEOLComments: true },
      ],
      "@stylistic/no-multiple-empty-lines": ["error",
        { max: 2, maxBOF: 0, maxEOF: 1 },
      ],
      "@stylistic/object-property-newline": ["error",
        { allowAllPropertiesOnSameLine: true },
      ],
      "@stylistic/array-element-newline": ["error",
        {
          ArrayExpression: { multiline: true, consistent: true },
          ArrayPattern: { multiline: true, consistent: true },
        },
      ],
      "@stylistic/indent": ["error",
        2,
        {
          ImportDeclaration: "first",
          SwitchCase: 1,
          flatTernaryExpressions: true,
        },
      ],
      "@stylistic/multiline-ternary": ["error", "always-multiline"],
      "@stylistic/object-curly-newline": ["error",
        {
          ObjectExpression: { multiline: true, consistent: true },
          ObjectPattern: { multiline: true, consistent: true },
          ImportDeclaration: "never",
          ExportDeclaration: { multiline: true, consistent: true },
        },
      ],
      "@stylistic/jsx-self-closing-comp": ["error",
        {
          component: true,
          html: true,
        },
      ],
      "react/function-component-definition": ["error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        }],
    },
  },
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
