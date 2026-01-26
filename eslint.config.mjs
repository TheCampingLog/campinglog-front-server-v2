// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPrettier from "eslint-config-prettier";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPrettier, // 프리티어 충돌 방지
  eslint.configs.recommended, // 기본 ESlint 권장 규칙 설정
  ...tseslint.configs.recommended, //Typescript를 위한 권장 규칙 설정

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "eslint.config.mjs",
  ]),
  // React 설정
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // React를 위한 권장 규칙 설정
      "react/jsx-pascal-case": "error", // React 컴포넌트는 PascalCase로
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
    },
    settings: {
      react: {
        version: "detect", // react 버전을 자동으로 감지해서 프로젝트에서 사용된 react 버전에 맞는 규칙이 적용된다.
      },
    },
  },
  // React Hooks 설정
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
    // React Hooks를 위한 권장 규칙 설정
  },
  // Import 설정
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules, // import 문을 위한 권장 규칙
      "import/no-unresolved": "off", // import 오류 경고 비활성화. ts 에서 이미 확인해서 중복 검사를 막기 위함이다.
      "import/no-duplicates": "error", // 같은 모듈에서 여러 번 import하는 것을 금지
    },

    settings: {
      // 이 부분은 import/order 설정을 추후 추가한다면 해주고, 안 해준다면 없애도 된다.
      "import/resolver": {
        node: {},
        typescript: {
          directory: "./src",
        },
      },
      "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    },
  },
  // 프로젝트 전체 공통 설정
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest", // 최신 js 문법 지원
      sourceType: "module", // esmodule 사용
      parser: tseslint.parser, // ts 를 eslint 가 이해할 수 있도록 파서 설정
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // jsx 문법 지원
        },
      },
    },
    rules: {
      // 함수 선언
      "prefer-arrow-callback": "error", // 콜백함수는 화살표 함수로
      "func-style": ["error", "expression"], // 함수는 선언문이 아닌 표현식으로

      // 네이밍
      "id-length": ["error", { min: 2 }], // 식별자 이름은 최소 2글자 이상

      // 상수
      "no-var": "error", // var 키워드 대신 let이나 const 사용
      "prefer-const": "error", // 재할당되지 않는 변수는 let 대신 const로
    },
  },
]);

export default eslintConfig;
