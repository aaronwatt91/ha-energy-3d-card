import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8099;
const SUPERVISOR_TOKEN = process.env.SUPERVISOR_TOKEN;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = url.pathname;

  // 1. Home Assistant Supervisor API Proxy: States
  if (pathname === '/api/ha-states') {
    if (!SUPERVISOR_TOKEN) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ standalone: true, states: [] }));
      return;
    }

    try {
      const response = await fetch('http://supervisor/core/api/states', {
        headers: {
          Authorization: `Bearer ${SUPERVISOR_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ standalone: false, states: data }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // 1b. Home Assistant Supervisor API Proxy: History (24h period)
  if (pathname === '/api/ha-history') {
    if (!SUPERVISOR_TOKEN) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ standalone: true, history: [] }));
      return;
    }

    try {
      const filterEntityId = url.searchParams.get('filter_entity_id') || '';
      const startParam = url.searchParams.get('start_time');
      const startTime = startParam || new Date(Date.now() - 24 * 3600 * 1000).toISOString();
      const haUrl = `http://supervisor/core/api/history/period/${encodeURIComponent(startTime)}?filter_entity_id=${encodeURIComponent(filterEntityId)}&minimal_response=true&no_attributes=true`;

      const response = await fetch(haUrl, {
        headers: {
          Authorization: `Bearer ${SUPERVISOR_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ standalone: false, history: data }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // 2. Static File Serving
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const filePath = path.join(__dirname, pathname);

  // Security: prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.glb' ? 'public, max-age=86400' : 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Home Energy 3D App listening on http://0.0.0.0:${PORT}`);
  if (SUPERVISOR_TOKEN) {
    console.log('✅ Connected to Home Assistant Supervisor API');
  } else {
    console.log('ℹ️ Running in Standalone / Demo mode');
  }
});
