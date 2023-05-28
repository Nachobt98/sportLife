import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sport {
  constructor(
    name: string,
    id?: number
  ) {
    this.id = id;
    this.name = name;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

@Entity()
export class City {
  constructor(
    name: string,
    id?: number
  ) {
    this.id = id;
    this.name = name;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}