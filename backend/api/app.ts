import cookieParser from 'cookie-parser'
import { server, use } from 'nexus'
import { auth } from 'nexus-plugin-jwt-auth'
import { prisma } from 'nexus-plugin-prisma'
import { shield } from 'nexus-plugin-shield'
import { rules } from './utils/permissions'


// Add cookie-parser middleware to Express
server.express.use(cookieParser())

use(prisma())

// enable jwt auth plugin
use(
	auth({
		appSecret: process.env.APP_SECRET,
		useCookie: true,
		cookieName: 'token',
	}),
)

// enable shield plugin
// use(
// 	shield({
// 		rules,
// 	}),
// )
