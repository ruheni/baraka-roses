import faunadb from 'faunadb';

const client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
const query = faunadb.query;

export { client, query };
