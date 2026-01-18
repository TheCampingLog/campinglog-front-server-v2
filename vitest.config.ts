import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // 테스트 환경
    environment: 'jsdom',

    // setup 파일
    setupFiles: ['./vitest.setup.ts'],

    // path alias 설정
    alias: {
      '@': path.resolve(__dirname, './'),
    },

    // 각 테스트마다 mock 초기화
    clearMocks: true,

    // coverage 설정
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: ['node_modules/', 'vitest.setup.ts', '**/*.config.{js,ts}', '**/*.d.ts', '**/dist/**', '**/.next/**'],
    },

    // HTML reporter 설정
    reporters: ['default', 'html'],
    outputFile: {
      html: './__reporters__/index.html',
    },

    // 전역 설정
    globals: true,

    // 테스트 파일 패턴
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    // 제외할 파일 패턴
    exclude: ['node_modules', 'dist', '.next', 'coverage', '**/*.config.{js,ts}'],
  },

  // Next.js 절대 경로 import 해결
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
