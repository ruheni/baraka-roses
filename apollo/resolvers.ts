// varieties: Variety
let customers = [];
let orders = [];
let agents = [];
let users = [];
let stock = [];
let colors = [
	'WHITE',
	'LILAC',
	'PINK',
	'CERISE',
	'RED',
	'ORANGE',
	'YELLOW',
	'PEACH',
	'BI_COLOUR',
];
let roles = ['GENERAL_MANAGER', 'SALES_EXEC', 'STOCK_CLERK', 'ADMIN'];
let orderStatuses = ['RECEIVED', 'PENDING', 'REVIEWED', 'CANCELLED'];

export const resolvers = {
	Query: {
		customers: () => customers,
		customer: (_: any, { id }: any) =>
			customers.find((customer) => customer.id === id),
		orders: () => orders,
		order: (_: any, { id }: any) => orders.find((order) => order.id === id),
		users: () => users,
		user: (_: any, { id }: any) => users.find((user) => user.id === id),
		full_stock: () => stock,
		single_stock: (_: any, { id }: any) =>
			stock.find((stock) => stock.id === id),
		colors: () => colors,
		orderStatuses: () => orderStatuses,
		roles: () => roles,
		agents: () => agents,
	},
};
