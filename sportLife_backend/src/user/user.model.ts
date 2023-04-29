import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class User {
  constructor(
    name: string,
    username: string,
    password: string,
    email: string,
    id?: number,
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  email: string;
}
