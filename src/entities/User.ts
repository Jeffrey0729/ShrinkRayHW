import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from 'typeorm';
import { Link } from './Link';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column({ unique: true })
    username: string;

    @Column({ default: false })
    isPro: boolean;

    @Column({ default: false })
    isAdmin: boolean;

    @Column()
    numHits: number;

    @OneToMany(() => Link, (link) => link.user, { cascade: ['insert', 'update'] })
    user: Relation<Link[]>;
}