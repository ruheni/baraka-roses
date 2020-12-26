import {
	arg,
	enumType,
	intArg,
	list,
	mutationField,
	mutationType,
	nonNull,
	objectType,
	queryField,
	stringArg
} from 'nexus'

const Grade = enumType({
	name: 'Grade',
	members: ['GRADED', 'UNGRADED'],
	description: 'Flower grades',
})

const Color = enumType({
	name: 'Color',
	members: ['WHITE', 'LILAC', 'PINK', 'CERISE', 'RED', 'ORANGE', 'YELLOW', 'PEACH', 'BI_COLOUR'],
	description: 'Flower colors',
})

const Product = objectType({
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

const products = queryField('products', {
	type: nonNull(list(Product)),
	resolve: async (_root, _args, ctx) => {
		const products = await ctx.prisma.product.findMany()
		return products
	},
})


const productDetails = queryField('productDetails', {
	type: Product,
	args: {
		id: nonNull(intArg()),
	},
	resolve: async (_root, { id }, ctx) => {
		const product = await ctx.prisma.product.findUnique({
			where: { id },
		})

		return product
	},
})

const createProduct = mutationField('createProduct', {
	type: Product,
	args: {
		color: nonNull(arg({ type: 'Color', })),
		grade: nonNull(arg({ type: 'Grade', })),
		variety: nonNull(stringArg()),
		length: nonNull(intArg()),
		quantity: nonNull(intArg()),
	},
	resolve: async (_root, { length, quantity, variety, color, grade }, ctx) => {
		const product = await ctx.prisma.product.create({
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

const updateProduct = mutationField('updateProduct', {
	type: Product,
	args: {
		id: nonNull(intArg()),
		color: nonNull(arg({ type: 'Color' })),
		grade: nonNull(arg({ type: 'Grade' })),
		variety: nonNull(stringArg()),
		length: nonNull(intArg()),
		quantity: nonNull(intArg()),
	},
	resolve: async (_root, { id, length, quantity, variety, color, grade }, ctx) => {
		const product = await ctx.prisma.product.update({
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


export {
	Grade,
	Color,
	Product,
	products,
	productDetails,
	createProduct,
	updateProduct
}
