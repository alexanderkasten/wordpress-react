/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  printWidth: 120,
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^node:(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
