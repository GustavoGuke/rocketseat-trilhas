// const { resolve } = require("node:path");

// const project = resolve(process.cwd(), "tsconfig.json");

// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   extends: ["eslint:recommended", "prettier", "turbo"],
//   plugins: ["only-warn"],
//   globals: {
//     React: true,
//     JSX: true,
//   },
//   env: {
//     node: true,
//   },
//   settings: {
//     "import/resolver": {
//       typescript: {
//         project,
//       },
//     },
//   },
//   ignorePatterns: [
//     // Ignore dotfiles
//     ".*.js",
//     "node_modules/",
//     "dist/",
//   ],
//   overrides: [
//     {
//       files: ["*.js?(x)", "*.ts?(x)"],
//     },
//   ],
// };
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}