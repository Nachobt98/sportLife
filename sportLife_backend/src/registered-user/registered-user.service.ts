import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { now } from 'mongoose';
import { Repository } from 'typeorm';
import { RegisteredUser } from './registered-user.model';

@Injectable()
export class RegisteredUserService {
  constructor(
    @InjectRepository(RegisteredUser)
    private registeredUsersRepository: Repository<RegisteredUser>,
  ) {}

  async getAll() {
    const users = await this.registeredUsersRepository.find();
    return {
      msg: users,
    };
  }

  async getByUsernameWithoutPassword(username: string) {
    let user = await this.registeredUsersRepository.findOne({
      where: [{ username: username }],
    });
    delete user.password;
    return user;
  }

  async updateRegisteredUser(body: any, userId: number) {
    return this.registeredUsersRepository.update(userId, {
      username: body['username'],
      name: body['name'],
      email: body['email'],
    });
  }

  async addUser() {
    return;
  }
}
