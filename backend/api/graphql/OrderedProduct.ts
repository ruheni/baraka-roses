import { schema } from 'nexus'

schema.objectType({
	name: 'OrderedProduct',
	definition(t) {
		t.model.id()
		t.model.product()
		t.model.initialQuantity()
		t.model.finalQuantity()
	},
})
