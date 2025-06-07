import { resolve } from 'path';

export default {
  base: './',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        projects: resolve(__dirname, 'src/html/projects.html'),
        research: resolve(__dirname, 'src/html/research.html'),
        blogs: resolve(__dirname, 'src/html/blogs.html'),
        contact: resolve(__dirname, 'src/html/contact.html')
      }
    }
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin'
        ]
      }
    }
  }
};