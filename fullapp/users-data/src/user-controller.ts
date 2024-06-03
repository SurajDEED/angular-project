/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UserService } from './user-service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('address') address: string,
  ): Promise<{ id: string }> {
    console.log(name);
    const generatedId = await this.userService.addUser(
      name,
      email,
      phone,
      address,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    await this.userService.deleteUser(userId);
    return null;
  }
}
