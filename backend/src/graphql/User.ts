import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
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
import { AuthPayload } from './AuthPayload'

const Role = enumType({
	name: 'Role',
	members: ['SALES_EXEC', 'GENERAL_MANAGER', 'STOCK_CLERK', 'ADMIN'],
	description: 'These are the different roles supported on the platform',
})

const User = objectType({
	name: 'User',
	definition(t) {
		t.model.id()
		t.model.firstName()
		t.model.lastName()
		t.model.email()
		t.model.password()
		t.model.role()
		t.model.createdAt()
	},
})

const users = queryField('users', {
	type: nonNull(list(User)),
	resolve: async (_root, _args, ctx) => {
		const users = await ctx.prisma.user.findMany()
		return users
	},
})

const userProfile = queryField('userProfile', {
	type: User,
	args: {
		email: nonNull(stringArg()),
	},
	resolve: async (_root, { email }, ctx) => {
		const user = await ctx.prisma.user.findUnique({
			where: {
				email: email,
			},
		})
		return user
	},
})


const signup = mutationField('signup', {
	type: AuthPayload,
	args: {
		firstName: nonNull(stringArg()),
		lastName: nonNull(stringArg()),
		email: nonNull(stringArg()),
		password: nonNull(stringArg()),
		role: nonNull(arg({ type: 'Role', })),
	},
	resolve: async (_root, { firstName, lastName, email, password, role }, ctx) => {
		const hashedPassword = await hash(password, 10)
		const user = await ctx.prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password: hashedPassword,
				role,
			},
		})

		return {
			token: sign({ userId: user.id, role }, `${process.env.APP_SECRET}`),
			user,
		}
	},
})


const login = mutationField('login', {
	type: AuthPayload,
	args: {
		email: nonNull(stringArg()),
		password: nonNull(stringArg()),
	},
	resolve: async (_root, { email, password }, ctx) => {
		const user = await ctx.prisma.user.findUnique({
			where: {
				email,
			},
		})

		if (!user) {
			throw new Error(`No user found fo email: ${email}`)
		}

		const validPassword = await compare(password, user.password)
		if (!validPassword) {
			throw new Error('Invalid password')
		}

		return {
			token: sign({ userId: user.id }, `${process.env.APP_SECRET}`),
			user,
		}
	},
})

const updateUser = mutationField('updateUser', {
	type: User,
	args: {
		id: nonNull(intArg()),
		firstName: nonNull(stringArg()),
		lastName: nonNull(stringArg()),
		email: nonNull(stringArg()),
		password: nonNull(stringArg()),
		role: nonNull(arg({ type: Role, })),
	},
	resolve: async (_root, { id, firstName, lastName, email, password, role }, ctx) => {
		let newPassword = await hash(password, 10)
		const user = await ctx.prisma.user.update({
			where: { id },
			data: {
				firstName,
				lastName,
				email,
				password: newPassword,
				role,
			},
		})
		return user
	},
})


export {
	User,
	Role,
	userProfile,
	users,
	login,
	signup,
	updateUser
}
