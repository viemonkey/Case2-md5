import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./Posts";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "varchar" })
    public username: string;

    @Column({ type: "varchar" })
    public password: string;

    @Column({ type: "varchar" })
    public image: string;

    @OneToMany(() => Posts, (posts) => posts.users)
    posts: Posts[];

}

