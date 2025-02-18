import express from 'express';
import cors from 'cors';
import * as Path from 'node:path';

import bridgeRoutes from './routes/bridge';
import userRoutes from './routes/users'; // Import user routes
import tollRoutes from './routes/toll'
import favoritesRoutes from "./routes/favorites.ts"

const server = express();

server.use(express.json());
server.use(cors());

// Bridge tabl routes
server.use('/api/v1/bridges', bridgeRoutes);

// User table routes
server.use('/api/v1/users', userRoutes); // Attach user routes

// Toll table routes
server.use('/api/v1/toll', tollRoutes);

server.use('/api/v1/favorites',favoritesRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')));
  server.use('/assets', express.static(Path.resolve('./dist/assets')));
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'));
  });
}

export default server;
