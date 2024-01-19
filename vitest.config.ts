// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		exclude: [...configDefaults.exclude, '**/__TESTS__/e2e/**'],
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.ts'],
		alias: [{ find: '@', replacement: path.resolve(__dirname) }],
	},
});
