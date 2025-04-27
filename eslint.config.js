/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react: require("eslint-plugin-react"),
    },
    rules: {
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

module.exports = config;
