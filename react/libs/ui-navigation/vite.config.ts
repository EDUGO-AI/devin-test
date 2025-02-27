import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  plugins: [react(), nxViteTsPaths()],
  build: {
    lib: {
      entry: join(__dirname, 'src/index.ts'),
      name: 'ui-navigation',
      fileName: (format) => `ui-navigation.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
