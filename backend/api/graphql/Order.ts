import { schema } from 'nexus'

schema.enumType({
	name: 'OrderStatus',
	members: ['PENDING', 'REVIEWED', 'CANCELLED'],
	description: 'Order statuses',
})

schema.objectType({
	name: 'Order',
	definition(t) {
		t.model.id()
		t.model.status()
		t.model.Customer()
		t.model.createdAt()
		t.model.date()
		t.model.orderedProducts()
	},
})

schema.extendType({
	type: 'Query',
	definition(t) {
		t.field('orders', {
			type: 'Order',
			nullable: false,
			list: true,
			resolve: async (_root, _args, ctx) => {
				const orders = ctx.db.order.findMany()
				return orders
			},
		})
		t.field('findOrdersByStatus', {
			type: 'Order',
			list: true,
			args: {
				status: schema.arg({
					type: 'OrderStatus',
					required: true,
				}),
			},
			resolve: async (_root, { status }, ctx) => {
				const order = await ctx.db.order.findMany({ where: { status } })
				return order
			},
		})
		t.field('orderDetails', {
			type: 'Order',
			args: {
				id: schema.intArg({ nullable: false }),
			},
			resolve: async (_root, { id }, ctx) => {
				const order = await ctx.db.order.findOne({ where: { id: id } })
				return order
			},
		})
	},
})

schema.extendType({
	type: 'Mutation',
	definition(t) {
		t.field('createOrder', {
			type: 'Order',
			args: {
				customerId: schema.intArg({ nullable: false }),
				productIds: schema.intArg({
					list: true,
					nullable: false,
				}),
				date: schema.stringArg({ nullable: false }),
			},
			resolve: async (_root, { customerId, productIds, date }, ctx) => {
				const ids = productIds.map((id) => ({ id }))

				const order = await ctx.db.order.create({
					data: {
						date,
						status: 'PENDING',
						Customer: {
							connect: { id: customerId },
						},
						orderedProducts: {
							connect: ids,
						},
					},
					include: {
						orderedProducts: true,
					},
				})

				return order
			},
		})
		t.field('updateOrder', {
			type: 'Order',
			args: {
				id: schema.intArg({ required: true }),
				finalQuantity: schema.intArg({ nullable: false }),
				status: schema.arg({
					type: 'OrderStatus',
					nullable: false,
				}),
				productIds: schema.intArg(),
			},
			resolve: async (_root, { id, status, productIds }, ctx) => {
				const order = await ctx.db.order.update({
					where: { id },
					data: {
						status,
					},
				})
				return order
			},
		})
	},
})
