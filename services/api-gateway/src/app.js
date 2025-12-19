const express = require('express');

function createApp() {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => res.json({ status: 'ok', service: 'api-gateway' }));

  return app;
}

module.exports = createApp;
