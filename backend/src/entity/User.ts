import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

export enum Role {
    ADMIN = "admin",
    SALES_EXEC = "sales_exec",
    STOCK_CLERK = "stock_clerk",
    GENERAL_MANAGER = "general_manager",
    USER = "user"
}
@ObjectType()
@Entity("users")
export class User extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    firstName: string;


    @Field(() => String)
    @Column()
    lastName: string;

    @Field(() => String)
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: Role,
        default: Role.USER
    })
    role: Role;

}
