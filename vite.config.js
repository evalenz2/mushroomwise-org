import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      "37bb3e84-4b2e-4d5a-8f6e-0305f1d65dd2-00-vp83cwlranii.janeway.replit.dev",
      "*.replit.dev",
      "*.repl.co",
      "*.replit.app",
      "*.janeway.replit.dev"
    ]
  }
});