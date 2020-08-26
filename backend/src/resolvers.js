import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import { users } from './data'

export default {
    Query: {
        user: async (_parent, { email }, ctx) => {

            const user = await ctx.prisma.user.findOne({
                where: {
                    email
                }
            })
            return user
        },
    },
    Mutation: {
        login: async (_parent, { email, password }, ctx) => {
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

            const { id, permissions, roles } = users.find(
                user => user.email === email && user.password === password
            );
            return {
                token: sign({ userId: user.id }, process.env.JWT_SECRET),
                user
            }
        }
    }
}
