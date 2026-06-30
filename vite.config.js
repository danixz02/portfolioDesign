import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { handleContactRequest } from './resend-contact.mjs';
import { loadProjectEnv } from './env.mjs';

loadProjectEnv();

function contactApiPlugin() {
  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        handleContactRequest(req, res).then((handled) => {
          if (!handled) next();
        }).catch((error) => {
          console.error(error);
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ message: 'Falha inesperada ao processar o contato.' }));
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), contactApiPlugin()],
});
