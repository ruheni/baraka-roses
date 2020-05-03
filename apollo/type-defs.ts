import gql from 'graphql-tag';

export const typeDefs = gql`
	type Customer {
		id: ID!
		name: String!
		market: String!
		contact_name: String
		email: String!
		phone_no: String
		agent: [ShippingAgent]
		orders: [Order]
	}

	type ShippingAgent {
		id: ID!
		agent_contact_name: String!
		agent_contact_tel: String!
		agent_email: String!
	}

	type Order {
		id: ID!
		customer: Customer!
		initial_qty: Int
		final_qty: Int
		status: OrderStatus
	}

	type User {
		id: ID!
		first_name: String!
		last_name: String!
		email: String!
		password: String
		role: [Role]
	}

	type Stock {
		id: ID!
		color: Color!
		length: Int!
		grade: Grade!
		variety: String!
		quantity: Int!
	}

	enum Grade {
		GRADED
		UNGRADED
	}

	enum OrderStatus {
		PENDING
		REVIEWED
		CANCELLED
	}

	enum Color {
		WHITE
		LILAC
		PINK
		CERISE
		RED
		ORANGE
		YELLOW
		PEACH
		BI_COLOUR
	}

	enum Role {
		SALES_EXEC
		GENERAL_MANAGER
		STOCK_CLERK
		ADMIN
	}

	type Query {
		customers: [Customer]
		customer(id: ID): Customer
		orders: [Order]
		order(id: ID): Order
		users: [User]
		user(id: ID): User
		full_stock: [Stock]
		orderStatuses: [OrderStatus]
		single_stock(id: ID, color: Color): Stock
		colors: [Color]
		roles: [Role]
		agents: [ShippingAgent]
		agent(id: ID): ShippingAgent
	}
`;
