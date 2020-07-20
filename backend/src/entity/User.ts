import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
    ADMIN = "admin",
    SALES_EXEC = "sales_exec",
    STOCK_CLERK = "stock_clerk",
    GENERAL_MANAGER = "general_manager",
    USER = "user"
}

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

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
