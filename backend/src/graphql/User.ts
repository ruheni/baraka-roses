import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

const userProfile = async (
  _parent: any,
  { email }: any,
  ctx: {
    prisma: { user: { findOne: (arg0: { where: { email: any } }) => any } }
  },
) => {
  const user = await ctx.prisma.user.findOne({
    where: {
      email,
    },
  })

  return user
}

const login = async (
  _parent: any,
  { email, password }: any,
  ctx: {
    prisma: { user: { findOne: (arg0: { where: { email: any } }) => any } }
  },
) => {
  const user = await ctx.prisma.user.findOne({
    where: {
      email,
    },
  })

  if (!user) {
    throw new Error('Invalid credentials')
  }

  const validPassword = await compare(password, user.password)
  if (!validPassword) {
    throw new Error('Invalid credentials')
  }

  return {
    token: sign(
      { userId: user.id, role: user.role },
      `${process.env.JWT_SECRET}`,
    ),
    user,
  }
}

export { userProfile, login }
