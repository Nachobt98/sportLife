import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/admin/admin.model';
import { AdminService } from 'src/admin/admin.service';
import { RegisteredUser } from 'src/registered-user/registered-user.model';
import { RegisteredUserService } from 'src/registered-user/registered-user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    AdminService,
    RegisteredUserService,
  ],
  imports: [
    TypeOrmModule.forFeature([RegisteredUser, Admin]),
    JwtModule.register({
      secret: 'superSecret',
      signOptions: { expiresIn: 60 },
    }),
  ],
})
export class UserModule {}
