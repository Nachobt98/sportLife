import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { SignInDto } from '../auth.dtos';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'usernameOrEmail' });
  }

  async validate(usernameOrEmail: string, password: string) {
    const promise = await this.authService.login(
      new SignInDto(usernameOrEmail, password),
    );

    const access_token = promise.access_token;

    if (!access_token) {
      throw new UnauthorizedException();
    }
    return access_token;
  }
}
