import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default () => {
  return defineConfig({
    test: {
      environment: 'jsdom',
      server: {
        deps: {
          inline: [/@adaptabletools\/adaptable/],
        },
      },
    },
    json: {
      stringify: true,
    },
    plugins: [
      checker({
        typescript: true,
      }),
      react(),
    ],
    build: {
      outDir: 'build',
      sourcemap: true,
    },
  });
};
