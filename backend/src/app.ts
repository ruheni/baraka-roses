
import Fastify from 'fastify'
import mercurius from 'mercurius'
import mercuriusCodegen from 'mercurius-codegen'
import { createContext } from './context'
import { schema } from './schema'

const app = Fastify()

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

declare module 'mercurius' {
  interface MercuriusContext extends PromiseType<ReturnType<typeof createContext>> { }
}

app.register(mercurius, {
  schema,
  context: createContext,
  graphiql: "playground",
})

mercuriusCodegen(app, {
  targetPath: '/generated/nexus.ts'
}).catch(console.error)

app.listen(4000)
  .then(() => console.log(`🚀 Server ready at 4000`))