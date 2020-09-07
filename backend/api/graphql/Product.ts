import { schema } from 'nexus'

schema.enumType({
	name: 'Grade',
	members: ['GRADED', 'UNGRADED'],
	description: 'Flower grades',
})

schema.enumType({
	name: 'Color',
	members: ['WHITE', 'LILAC', 'PINK', 'CERISE', 'RED', 'ORANGE', 'YELLOW', 'PEACH', 'BI_COLOUR'],
	description: 'Flower colors',
})

schema.objectType({
	name: 'Product',
	definition(t) {
		t.model.id()
		t.model.length()
		t.model.variety()
		t.model.quantity()
		t.model.createdAt()
		t.model.grade()
		t.model.color()
	},
})

schema.extendType({
	type: 'Query',
	definition(t) {
		t.field('products', {
			type: 'Product',
			nullable: false,
			list: true,
			resolve: async (_root, _args, ctx) => {
				const products = await ctx.db.product.findMany()
				return products
			},
		})
		t.field('productDetails', {
			type: 'Product',
			args: {
				id: schema.intArg({ nullable: false }),
			},
			resolve: async (_root, { id }, ctx) => {
				const product = await ctx.db.product.findOne({
					where: {
						id: id,
					},
				})

				return product
			},
		})
	},
})

schema.extendType({
	type: 'Mutation',
	definition(t) {
		t.field('createProduct', {
			type: 'Product',
			args: {
				color: schema.arg({
					type: 'Color',
					required: true,
				}),
				grade: schema.arg({
					type: 'Grade',
					required: true,
				}),
				length: schema.intArg({ nullable: false }),
				variety: schema.stringArg({ nullable: false }),
				quantity: schema.intArg({ nullable: false }),
			},
			resolve: async (_root, { length, quantity, variety, color, grade }, ctx) => {
				const product = await ctx.db.product.create({
					data: {
						length: length,
						quantity: quantity,
						variety: variety,
						color: color,
						grade: grade,
					},
				})

				return product
			},
		})
		t.field('updateProduct', {
			type: 'Product',
			args: {
				id: schema.intArg({ required: true }),
				color: schema.arg({
					type: 'Color',
					required: true,
				}),
				grade: schema.arg({
					type: 'Grade',
					required: true,
				}),
				length: schema.intArg({ nullable: false }),
				variety: schema.stringArg({ nullable: false }),
				quantity: schema.intArg({ nullable: false }),
			},
			resolve: async (_root, { id, length, quantity, variety, color, grade }, ctx) => {
				const product = await ctx.db.product.update({
					where: { id: id },
					data: {
						length: length,
						quantity: quantity,
						variety: variety,
						color: color,
						grade: grade,
					},
				})

				return product
			},
		})
	},
})
