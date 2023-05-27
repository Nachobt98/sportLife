import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import 'reflect-metadata';
import { SignInDto, SignUpDto, SignUpRegisteredUserDto } from './auth.dtos';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisteredUser } from 'src/registered-user/registered-user.model';
import { Admin } from 'src/admin/admin.model';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(RegisteredUser)
    private registeredUserRepository: Repository<RegisteredUser>,
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async login(dto: SignInDto) {
    var user: any = await this.registeredUserRepository.findOne({
      where: [
        { username: dto.email },
        { email: dto.email },
      ],
    });
    
    if (!user) {
      let user = await this.adminRepository.findOne({
        where: [
          { username: dto.email },
          { email: dto.email },
        ],
      });
      if (!user) {
        throw new UnauthorizedException();
      }
    }
    console.log(user)
    const compare = await bcrypt.compare(dto.password, user.password);

    if (!compare) {
      throw new UnauthorizedException();
    }
    
    const payload = { username: user.username };
    console.log(payload);
    return payload
      //type: this.getUserType(user),
  }

  async signUpRegisteredUser(dto: SignUpRegisteredUserDto) {
    const hash = await this.hashPassword(dto.password);
    console.log(dto.password)
    let user = new RegisteredUser(dto.firstname, dto.lastname, dto.username, dto.location, hash, dto.birthdate, dto.email);
    
    const userExists = await this.registeredUserExists(user);
    
    if (userExists) {
      throw new ConflictException('User already exists.');
    }

    try {
      await this.registeredUserRepository.save(user);
    } catch (error) {
      console.log(error)
      return error;
    }

    const payload = { username: user.username };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
      type: this.getUserType(user),
    };
  }

  async signUpAdmin(dto: SignUpDto) {
    const hash = await this.hashPassword(dto.password);
    let user = new Admin(dto.firstname, dto.lastname, dto.username, dto.location, dto.password, dto.birthdate, dto.email, hash);

    const userExists = await this.adminExists(user);

    if (userExists) {
      throw new ConflictException('User already exists.');
    }

    try {
      await this.adminRepository.save(user);
    } catch (error) {
      return error;
    }

    const payload = { username: user.username };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async hashPassword(password: string) {
    const saltOrRounds = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async registeredUserExists(user: RegisteredUser) {
    const users = await this.registeredUserRepository.find({
      where: [{ username: user.username }, { email: user.email }],
    });
    return users.length > 0;
  }

  async adminExists(user: Admin) {
    const users = await this.adminRepository.find({
      where: [{ username: user.username }, { email: user.email }],
    });
    return users.length > 0;
  }

  getUserType(user: any): String | ConflictException {
    return user instanceof RegisteredUser
      ? 'RegisteredUser'
      : user instanceof Admin
      ? 'Admin'
      : new ConflictException();
  }
}
