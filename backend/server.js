import http from 'http';
import app from './app.js';
import 'dotenv/config';

const server = http.createServer(app); // Create a http server

const port = process.env.PORT || 3000;

server.listen(port || 3000, () => {
  console.log(`Server running on port ${port}`);
});