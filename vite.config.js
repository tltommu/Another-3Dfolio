import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Vite configuration
    define: {
      __VITE_EMAILJS_SERVICE_ID__: JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
      __VITE_EMAILJS_TEMPLATE_ID__: JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
      __VITE_EMAILJS_PUBLIC_KEY__: JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
    },
    plugins: [react()], // Include plugins here
  };
});
