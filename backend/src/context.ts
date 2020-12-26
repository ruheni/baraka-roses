import { PrismaClient } from '@prisma/client'
import { FastifyRequest, FastifyReply } from 'fastify'

// prisma client context
const prisma = new PrismaClient()
export interface Context {
    prisma: PrismaClient
    authorization: FastifyRequest
}

export const createContext = async (req: FastifyRequest, _reply: FastifyReply) => {
    return {
        prisma,
        authorization: req.headers.authorization || null,
    }
}