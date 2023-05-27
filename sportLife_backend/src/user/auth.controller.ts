import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto, SignUpRegisteredUserDto } from './auth.dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() dto: SignInDto) {
    console.log(dto);
    const a = await this.authService.login(dto);
    console.log(a)
    return a;
  }

  @Post('signupRegisteredUser')
  signUpRegisteredUser(@Body() dto: SignUpRegisteredUserDto) {
    console.log(dto);
    return this.authService.signUpRegisteredUser(dto);
  }

  @Post('signupAdmin')
  signUpAdmin(@Body() dto: SignUpDto) {
    return this.authService.signUpAdmin(dto);
  }

  @Get('getSession/')
  getProfile(@Request() req) {
    return req.user;
  }
}
