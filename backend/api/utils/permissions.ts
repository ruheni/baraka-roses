import { rule } from 'nexus-plugin-shield'
import { getUserId } from './index'

const isAuthenticated = rule({ cache: 'contextual' })(async (_root, args, ctx, info) => {
	const userId = getUserId(ctx.token)
	return Boolean(userId)
})

const rules = {
	Query: {
		// agents: isAuthenticated,
		// agentProfile: isAuthenticated,
		// customers: isAuthenticated,
		// customerProfile: isAuthenticated,
		// findOrdersByStatus: isAuthenticated,
		// orderDetails: isAuthenticated,
		// products: isAuthenticated,
		// productDetails: isAuthenticated,
		// users: isAuthenticated,
		// userProfile: isAuthenticated,
	},
	Mutations: {
		// createAgent: isAuthenticated,
		// updateAgent: isAuthenticated,
		// createCustomer: isAuthenticated,
		// updateCustomer: isAuthenticated,
		// createOrder: isAuthenticated,
		// updateOrder: isAuthenticated,
		// createProduct: isAuthenticated,
		// updateProduct: isAuthenticated,
		// updateUser: isAuthenticated,
	},
}

export { rules }
