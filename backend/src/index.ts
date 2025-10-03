import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { readFileSync } from 'fs';
import path from 'path';
import { json } from 'body-parser';
import { config } from 'dotenv';
import { placesResolver } from './resolvers/placesResolver';

config();

// Load schema
const typeDefs = readFileSync(
  path.join(__dirname, 'schema', 'places.graphql'),
  'utf8'
);
const resolvers = [placesResolver];

// Create Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();

  const app = express();

  // Important: include context (even if empty)
  app.use(
    '/graphql',
    json(), // or express.json()
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.authorization || '' }),
    })
  );

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
  });
}

startServer();
