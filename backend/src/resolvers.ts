import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

export default {
    Query: {
        user: async (_parent: any, { email }: any, ctx: { prisma: { user: { findOne: (arg0: { where: { email: any } }) => any } } }) => {

            const user = await ctx.prisma.user.findOne({
                where: {
                    email
                }
            })

            return user
        },
    },
    Mutation: {
        login: async (_parent: any, { email, password }: any, ctx: { db: { user: { findOne: (arg0: { where: { email: any } }) => any } } }) => {
            const user = await ctx.db.user.findOne({
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
                token: sign({ userId: user.id }, `${process.env.JWT_SECRET}`),
                user
            }
        }
    }
}
