import { Arg, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return 'hello there stranger'
    }


    @Mutation()
    async signup(
        @Arg('firstname') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('email') email: string,
    ) {
        // await User.insert({
        //     firstName,
        //     lastName,
        //     email
        // })
        const user = { firstName, lastName, email };
        return user;
    }
}
