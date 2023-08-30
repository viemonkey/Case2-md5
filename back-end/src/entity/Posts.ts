import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    public dateTime: string;
    
    @Column()
    public title: string;


    @Column({ type: "varchar" })
    public image: string;

    @ManyToOne(() => Users, (users) => users.posts)
    users: Users;
}