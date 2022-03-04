import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("coords")
class Coord {
    @PrimaryColumn()
    id: string;
    @Column()
    email: string;
    @Column()
    latitude: string;
    @Column()
    longitude: string;
    @Column()
    description: string;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Coord }