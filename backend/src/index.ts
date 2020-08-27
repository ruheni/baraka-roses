import 'dotenv'
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import expressJwt from 'express-jwt';
import { createContext } from './context'

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const port = 4000;
const app = express();

app.use(
    expressJwt({
        secret: process.env.JWT_SECRET || 'SUPER_SECRET',
        algorithms: ['HS256'],
        credentialsRequired: false,
    })
)
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
});

server.applyMiddleware({ app });

app.listen({ port }, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
});
