import { objectType } from 'nexus'

export const OrderedProduct = objectType({
	name: 'OrderedProduct',
	definition(t) {
		t.model.id()
		t.model.product()
		t.model.initialQuantity()
		t.model.finalQuantity()
	},
})
