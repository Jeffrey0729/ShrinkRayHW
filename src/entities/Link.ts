import { Entity, PrimaryColumn, Column, ManyToOne, Relation } from 'typeorm';
import { User } from './User';

@Entity()
export class Link {
    @PrimaryColumn('uuid')
    linkId: string;

    @Column()
    originalUrl: string;

    @Column()
    lastAccessedOn: string;

    @Column({ default: 0 })
    numHits: number;

    @ManyToOne(() => User, (user) => user.links, { cascade: ['insert', 'update'] })
    user: Relation<User>;
}