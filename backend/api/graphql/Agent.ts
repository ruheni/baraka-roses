import { schema } from 'nexus'

schema.objectType({
	name: 'Agent',
	definition(t) {
		t.model.id()
		t.model.name()
		t.model.email()
		t.model.phoneNumber()
		t.model.Customer()
		t.model.createdAt()
	},
})

schema.extendType({
	type: 'Query',
	definition(t) {
		t.field('agents', {
			type: 'Agent',
			nullable: false,
			list: true,
			resolve: async (_root, _args, ctx) => {
				const agent = await ctx.db.agent.findMany()
				return agent
			},
		})
		t.field('agentProfile', {
			type: 'Agent',
			args: {
				id: schema.intArg({ nullable: false }),
			},
			resolve: async (_root, { id }, ctx) => {
				const agent = await ctx.db.agent.findOne({
					where: { id: id },
				})

				return agent
			},
		})
	},
})

schema.extendType({
	type: 'Mutation',
	definition(t) {
		t.field('createAgent', {
			type: 'Agent',
			args: {
				name: schema.stringArg({ nullable: false }),
				phoneNumber: schema.stringArg({ nullable: false }),
				email: schema.stringArg({ nullable: false }),
				customerId: schema.intArg({ nullable: false }),
			},
			resolve: async (_root, { name, email, phoneNumber, customerId }, ctx) => {
				const agent = await ctx.db.agent.create({
					data: {
						name,
						email,
						phoneNumber,
						Customer: {
							connect: { id: customerId },
						},
					},
				})

				return agent
			},
		})
		t.field('updateAgent', {
			type: 'Agent',
			nullable: false,
			args: {
				id: schema.intArg({ nullable: false }),
				name: schema.stringArg({ nullable: false }),
				phoneNumber: schema.stringArg({ nullable: false }),
				email: schema.stringArg({ nullable: false }),
				customerId: schema.intArg({ nullable: false }),
			},
			resolve: async (_root, { name, email, phoneNumber, id, customerId }, ctx) => {
				const agent = await ctx.db.agent.update({
					where: {
						id
					},
					data: {
						name,
						email,
						phoneNumber,
						Customer: {
							connect: { id: customerId }
						}
					}
				})
				return agent
			},
		})
	},
})
