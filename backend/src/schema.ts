import { makeSchema } from 'nexus'
import * as types from './graphql'
import { nexusPrisma } from 'nexus-plugin-prisma'


export const schema = makeSchema({
  shouldExitAfterGenerateArtifacts: Boolean(process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION),
  types: [types],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})