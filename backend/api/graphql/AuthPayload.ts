import { schema } from 'nexus'

schema.objectType({
	name: 'AuthPayload',
	definition(t) {
		t.string('token')
		t.field('User', {
			type: 'User',
		})
	},
})
