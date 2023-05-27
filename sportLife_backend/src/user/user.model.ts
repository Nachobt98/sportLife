import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
export class User {
  constructor(
    firstname: string,
    lastname: string,
    username: string,
    location: string,
    password: string,
    birthdate: string,
    email?: string,
    id?: number,
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.location = location;
    this.password = password;
    this.birthdate = birthdate;
    this.email = email;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  location: string;

  @Column({ nullable: true })
  email: string;

  @Column({nullable: true})
  birthdate: string;
}
