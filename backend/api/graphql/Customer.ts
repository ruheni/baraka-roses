import { schema } from 'nexus'

schema.objectType({
	name: 'Customer',
	definition(t) {
		t.model.id()
		t.model.name()
		t.model.contactName()
		t.model.email()
		t.model.market()
		t.model.phoneNumber()
		t.model.agents({
			filtering: true,
			ordering: true,
		})
		t.model.orders({
			pagination: false,
			filtering: true,
			ordering: true,
		})
		t.model.createdAt()
	},
})

schema.extendType({
	type: 'Query',
	definition(t) {
		t.field('customers', {
			type: 'Customer',
			nullable: false,
			list: true,
			resolve: async (_root, _args, ctx) => {
				const customers = await ctx.db.customer.findMany()
				return customers
			},
		})
		t.field('customerProfile', {
			type: 'Customer',
			args: {
				id: schema.intArg({ required: true }),
			},
			resolve: async (_root, { id }, ctx) => {
				const customer = await ctx.db.customer.findOne({
					where: { id },
				})

				return customer
			},
		})
	},
})

schema.extendType({
	type: 'Mutation',
	definition(t) {
		t.field('createCustomer', {
			type: 'Customer',
			nullable: false,
			args: {
				name: schema.stringArg({ required: true }),
				contactName: schema.stringArg({ required: true }),
				market: schema.stringArg({ required: true }),
				email: schema.stringArg({ required: true }),
				phoneNumber: schema.stringArg({ required: true }),
				agentIds: schema.intArg({ nullable: false, list: true }),
			},
			resolve: async (_root, { name, contactName, market, email, phoneNumber, agentIds }, ctx) => {
				const ids = agentIds.map((id: any) => ({ id }))
				const customer = await ctx.db.customer.create({
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
		t.field('updateCustomer', {
			type: 'Customer',
			nullable: false,
			args: {
				id: schema.intArg({ required: true }),
				name: schema.stringArg({ nullable: false }),
				contactName: schema.stringArg({ nullable: false }),
				market: schema.stringArg({ nullable: false }),
				email: schema.stringArg({ nullable: false }),
				phoneNumber: schema.stringArg({ nullable: false }),
			},
			resolve: async (_root, { id, name, contactName, market, email, phoneNumber }, ctx) => {
				const customer = await ctx.db.customer.update({
					where: { id: id },
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
	},
})
