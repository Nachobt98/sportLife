import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('/getAll')
  getAll() {
    return this.adminService.getAll();
  }

  @Get('/getById/:id')
  getById(@Param('id') id: number) {
    return id;
  }

  @Post('/createUser')
  createUser(@Body() body: any) {
    return this.adminService.addUser();
  }
}
