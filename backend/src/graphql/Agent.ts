import {
	intArg,
	list,
	mutationField,
	nonNull,
	objectType,
	queryField,
	stringArg
} from 'nexus'

const Agent = objectType({
	name: 'Agent',
	definition(t) {
		t.model.id()
		t.model.name()
		t.model.email()
		t.model.phoneNumber()
		t.model.customer()
		t.model.createdAt()
	},
})

const Agents = queryField('agents', {
	type: nonNull(list(Agent)),
	resolve: async (_root, _args, ctx) => {
		const agent = await ctx.prisma.agent.findMany()
		return agent
	},
})

const AgentProfile = queryField('agentProfile', {
	type: Agent,
	args: {
		id: nonNull(intArg()),
	},
	resolve: async (_root, { id }, ctx) => {
		const agent = await ctx.prisma.agent.findUnique({
			where: { id: id },
		})

		return agent
	},
})

const createAgent = mutationField('createAgent', {
	type: Agent,
	args: {
		name: nonNull(stringArg()),
		phoneNumber: nonNull(stringArg()),
		email: nonNull(stringArg()),
		customerId: nonNull(intArg()),
	},
	resolve: async (_root, { name, email, phoneNumber, customerId }, ctx) => {
		const agent = await ctx.prisma.agent.create({
			data: {
				name: name,
				email: email,
				phoneNumber: phoneNumber,
				customer: {
					connect: { id: customerId },
				},
			},
		})

		return agent
	},
})

const updateAgent = mutationField('updateAgent', {
	type: nonNull(Agent),
	args: {
		id: nonNull(intArg()),
		name: nonNull(stringArg()),
		phoneNumber: nonNull(stringArg()),
		email: nonNull(stringArg()),
	},
	resolve: async (_root, { name, email, phoneNumber, id }, ctx) => {
		const agent = await ctx.prisma.agent.update({
			where: {
				id: id,
			},
			data: {
				name: name,
				phoneNumber: phoneNumber,
				email: email,
			},
		})
		return agent
	},
})


export {
	Agent,
	Agents,
	AgentProfile,
	createAgent,
	updateAgent
}

