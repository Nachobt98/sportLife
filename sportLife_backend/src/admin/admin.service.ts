import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.model';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async getAll() {
    const users = await this.adminRepository.find();
    return {
      msg: users,
    };
  }

  async getByUsernameWithoutPassword(username: string) {
    let user = await this.adminRepository.findOne({
      where: [{ username: username }],
    });
    delete user.password;
    return user;
  }

  async addUser() {
    return;
  }
}
