import {
	intArg,
	list,
	mutationField,
	nonNull,
	objectType,
	queryField,
	stringArg
} from 'nexus'

const Customer = objectType({
	name: 'Customer',
	definition(t) {
		t.model.id()
		t.model.name()
		t.model.contactName()
		t.model.email()
		t.model.market()
		t.model.phoneNumber()
		t.model.agents()
		t.model.orders({
			pagination: false,
			filtering: true,
			ordering: true,
		})
		t.model.createdAt()
	},
})

const customers = queryField('customers', {
	type: nonNull(list(Customer)),
	resolve: async (_root, _args, ctx) => {
		const customers = await ctx.prisma.customer.findMany()
		return customers
	},
})

const customerProfile = queryField('customerProfile', {
	type: Customer,
	args: {
		id: nonNull(intArg()),
	},
	resolve: async (_root, { id }, ctx) => {
		const customer = await ctx.prisma.customer.findUnique({
			where: { id },
		})

		return customer
	},
})

const createCustomer = mutationField('createCustomer', {
	type: nonNull(Customer),
	args: {
		name: nonNull(stringArg()),
		contactName: nonNull(stringArg()),
		market: nonNull(stringArg()),
		email: nonNull(stringArg()),
		phoneNumber: nonNull(stringArg()),
		agentIds: nonNull(list(intArg())),
	},
	resolve: async (_root, { name, contactName, market, email, phoneNumber, agentIds }, ctx) => {
		const ids = agentIds.map((id: any) => ({ id }))
		
		const customer = await ctx.prisma.customer.create({
			data: {
				name: name,
				contactName: contactName,
				email: email,
				market: market,
				phoneNumber: phoneNumber,
				agents: {
					connect: ids,
				},
			},
		})
		return customer
	},
})

const updateCustomer = mutationField('updateCustomer', {
	type: nonNull(Customer),
	args: {
		id: nonNull(intArg()),
		name: nonNull(stringArg()),
		contactName: nonNull(stringArg()),
		market: nonNull(stringArg()),
		email: nonNull(stringArg()),
		phoneNumber: nonNull(stringArg()),
	},
	resolve: async (_root, { id, name, contactName, market, email, phoneNumber }, ctx) => {
		const customer = await ctx.prisma.customer.update({
			where: { id },
			data: {
				name: name,
				contactName: contactName,
				market: market,
				email: email,
				phoneNumber: phoneNumber,
			},
		})
		return customer
	},
})

export {
	Customer,
	customerProfile,
	customers,
	createCustomer,
	updateCustomer
}

