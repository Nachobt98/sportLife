import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  constructor(
    name: string,
    description: string,
    sport: string,
    members: number,
    id?: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sport = sport;
    this.members = members;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  sport: string;

  @Column()
  members: number;
}
