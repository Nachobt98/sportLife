import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConflictException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegisteredUserService } from 'src/registered-user/registered-user.service';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private registeredUserService: RegisteredUserService,
    private adminService: AdminService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'superSecret',
    });
  }

  async validate(payload: any) {
    let username = payload.username;
    try {
      return await this.registeredUserService.getByUsernameWithoutPassword(
        username,
      );
    } catch {}
    try {
      return await this.adminService.getByUsernameWithoutPassword(username);
    } catch {
      throw new ConflictException();
    }
    return this.registeredUserService.getByUsernameWithoutPassword(username);
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
