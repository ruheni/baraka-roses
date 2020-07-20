import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { User } from 'src/entity/User';

@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return 'hello there stranger'
    }

    @Mutation(() => Boolean)
    async signup(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('email') email: string,
    ) {
        await User.insert({
            firstName,
            lastName,
            email
        })

        return true;
    }
}
