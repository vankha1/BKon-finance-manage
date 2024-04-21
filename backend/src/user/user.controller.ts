import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
