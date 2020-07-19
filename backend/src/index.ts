import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from "type-graphql";
import { createConnection } from 'typeorm';
import "reflect-metadata";
import { UserResolver } from './resolvers/UserResolver';


(async () => {
    const app = express()

    await createConnection()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
    })

    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('Server started')
    })

})()
