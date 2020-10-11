import { schema } from 'nexus'

schema.objectType({
	name: 'AuthPayload',
	definition(t) {
		t.string('token', { nullable: false })
		t.field('User', {
			type: 'User',
		})
	},
})
