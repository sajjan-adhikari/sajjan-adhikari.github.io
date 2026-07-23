import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: false // Changed from true to false
    }),
    paths: {
      base: ''
    },
    prerender: {
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        // Ignore non-fatal prerender errors during build
        return;
      }
    }
  }
};

export default config;