import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "build/",
      "freyer-forensics/",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "generate_phase2_docs.py",
      "generate_readme.py",
      "run_qa.js",
      "public/video/",
      "tests/*.js",
      "verified_qa.js",
      "capture_*.js",
    ],
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }
);
