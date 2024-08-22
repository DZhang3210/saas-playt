/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "warn",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-non-null-assertion": "off", // Disable non-null assertion rule
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-unsafe-assignment": "off", // Disable unsafe assignment rule
    "@typescript-eslint/no-unsafe-argument": "off", // Disable unsafe argument rule
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-wrapper-object-types": "off",
    "@typescript-eslint/no-empty-interface": "off", // Disable empty interface rule
    "@typescript-eslint/no-unnecessary-type-assertion": "off", // Disable unnecessary type assertion rule
    "@typescript-eslint/non-nullable-type-assertion-style": "off", // Disable non-nullable type assertion style rule
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off", // Disable no-non-null-asserted-optional-chain rule
    "@typescript-eslint/no-empty-object-type": "off",
  },
};

module.exports = config;
