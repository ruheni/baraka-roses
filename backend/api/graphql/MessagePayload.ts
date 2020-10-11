import { schema } from 'nexus'

schema.objectType({
    name: 'MessagePayload',
    definition(t) {
        t.string("message", { nullable: false })
    }
})
