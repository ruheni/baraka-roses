import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../apollo/schema';
import Cors from 'micro-cors';

const apolloServer = new ApolloServer({ schema });

const cors = Cors({
	allowMethods: ['POST', 'GET', 'OPTIONS'],
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const hander = apolloServer.createHandler({ path: '/api/graphql' });

export default cors(hander);
