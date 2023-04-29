import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RegisteredUserService } from './registered-user.service';

@Controller('/registeredUser')
export class RegisteredUserController {
  constructor(private registeredUserService: RegisteredUserService) {}

  @Get('/getAll')
  getAll() {
    return this.registeredUserService.getAll();
  }

  @Get('/getByUsername/:username')
  getByUsername(@Param('username') username: string) {
    return this.registeredUserService.getByUsernameWithoutPassword(username);
  }

  @Post('/createUser')
  createUser(@Body() body: any) {
    return this.registeredUserService.addUser();
  }

  @Put('/:id')
  updateUser(@Body() body: any, @Param('id') id: number) {
    return this.registeredUserService.updateRegisteredUser(body, id);
  }
}
