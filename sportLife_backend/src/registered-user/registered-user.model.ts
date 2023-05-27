import { User } from 'src/user/user.model';
import { Entity } from 'typeorm';

@Entity()
export class RegisteredUser extends User {
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
    super(firstname, lastname, username, location, password, birthdate, email, id);
  }
}
