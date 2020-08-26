import { PrismaClient } from '@prisma/client'

// prisma client context
const prisma = new PrismaClient()

// authentication context
const authContext = ({ req }) => {
    const user = req.user || null
    return { user }
}

export function createContext() {
    return { prisma, authContext }
}
