import { User } from 'src/user/user.model';
import { Entity } from 'typeorm';

@Entity()
export class Admin extends User {
  constructor(
    name: string,
    username: string,
    password: string,
    email?: string,
    id?: number,
  ) {
    super(name, username, password, email, id);
  }
}
