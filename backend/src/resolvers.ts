import { login, userProfile } from './graphql/User'

export default {
  Query: {
    userProfile,
  },
  Mutation: {
    login,
  },
}
