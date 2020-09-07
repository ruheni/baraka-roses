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
				name: schema.stringArg({ required: true }),
				phoneNumber: schema.stringArg({ required: true }),
				email: schema.stringArg({ required: true }),
				customerId: schema.intArg({ required: true }),
			},
			resolve: async (_root, { name, email, phoneNumber, customerId }, ctx) => {
				const agent = await ctx.db.agent.create({
					data: {
						name: name,
						email: email,
						phoneNumber: phoneNumber,
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
			},
			resolve: async (_root, { name, email, phoneNumber, id }, ctx) => {
				const agent = await ctx.db.agent.update({
					where: {
						id: id,
					},
					data: {
						name: name,
						phoneNumber: name,
						email: phoneNumber,
					},
				})
				return agent
			},
		})
	},
})
