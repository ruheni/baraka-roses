import express from 'express';
import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolver/UserResolver';


(async () => {
    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        })
    })

    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('Server started')
    })

})()
