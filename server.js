
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.on('uncaughtException', (err) => {
  console.error(`[FATAL] [${new Date().toISOString()}] Uncaught Exception:`, err.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error(`[FATAL] [${new Date().toISOString()}] Unhandled Rejection:`, reason);
  process.exit(1);
});

async function startServer() {
  const PORT = process.env.PORT || 8080;
  
  try {
    const server = await createServer({
      server: {
        port: Number(PORT),
        host: '0.0.0.0',
        strictPort: true,
        hmr: false,
      },
      configFile: false,
      root: __dirname,
    });

    await server.listen();
    console.log(`[READY] Grøde Rekruttering kjører på port ${PORT}`);
  } catch (err) {
    console.error(`[ERROR] Feil under oppstart:`, err);
    process.exit(1);
  }
}

startServer();
