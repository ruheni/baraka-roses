import {
	arg,
	enumType,
	intArg,
	list,
	mutationField,
	nonNull,
	objectType,
	queryField,
	stringArg
} from 'nexus'

const OrderStatus = enumType({
	name: 'OrderStatus',
	members: ['PENDING', 'REVIEWED', 'CANCELLED'],
	description: 'Order statuses',
})

const Order = objectType({
	name: 'Order',
	definition(t) {
		t.model.id()
		t.model.status()
		t.model.customer()
		t.model.createdAt()
		t.model.date()
		t.model.orderedProducts()
	},
})

const orders = queryField('orders', {
	type: list(nonNull(Order)),
	resolve: async (_root, _args, ctx) => {
		const orders = ctx.prisma.order.findMany()
		return orders
	},
})

const findOrdersByStatus = queryField('findOrdersByStatus', {
	type: list(Order),
	args: {
		status: nonNull(arg({ type: OrderStatus }))
	},
	resolve: async (_root, { status }, ctx) => {
		const order = await ctx.prisma.order.findMany({ where: { status } })
		return order
	},
})

const orderDetails = queryField('orderDetails', {
	type: Order,
	args: {
		id: nonNull(intArg()),
	},
	resolve: async (_root, { id }, ctx) => {
		const order = await ctx.prisma.order.findUnique({
			where: { id }
		})
		return order
	},
})

const createOrder = mutationField('createOrder', {
	type: Order,
	args: {
		customerId: nonNull(intArg()),
		productIds: nonNull(list(intArg())),
		date: nonNull(stringArg()),
	},
	resolve: async (_root, { customerId, productIds, date }, ctx) => {
		const ids = productIds.map((id: any) => ({ id }))

		const order = await ctx.prisma.order.create({
			data: {
				date,
				status: 'PENDING',
				customer: {
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


const updateOrder = mutationField('updateOrder', {
	type: Order,
	args: {
		id: nonNull(intArg()),
		finalQuantity: intArg(),
		status: nonNull(arg({ type: OrderStatus })),
		productIds: list(intArg()),
	},
	resolve: async (_root, { id, status, productIds }, ctx) => {
		const order = await ctx.prisma.order.update({
			where: { id },
			data: {
				status,
			},
		})
		return order
	},
})

export {
	Order,
	OrderStatus,
	orderDetails,
	orders,
	findOrdersByStatus,
	createOrder,
	updateOrder
}

