import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterQuery } from 'mongoose';
import { Authorization } from 'src/common/authorization';
import { Roles } from 'src/common/constant';
import { ValidationError } from 'src/common/errors';
import { ROUTES } from 'src/common/routes';
import { capitalizeInitials } from 'src/utils';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersDto } from './users.dto';
import { User } from './users.schema';
import { UsersService } from './users.service';
import { validateUser } from './users.validation';

@ApiTags(capitalizeInitials(ROUTES.users.name))
@Controller(ROUTES.users.route)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() userDto: UsersDto): Promise<User> {
    const isValid = validateUser(userDto);
    if (!isValid) {
      throw new ValidationError(null, validateUser.errors);
    }

    return await this.userService.create(userDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('log-out')
  async logOut(@Request() req: any): Promise<any> {
    return await this.userService.logOut(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(@Param('id') userId: string): Promise<User> {
    const conditions: FilterQuery<User> = { _id: userId };
    return await this.userService.findOne(conditions);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Request() req, @Param('id') userId: string): Promise<any> {
    Authorization.authorize(req.user, [Roles.SUPER_ADMIN, Roles.ADMIN]);
    const conditions: FilterQuery<User> = { _id: userId };
    return await this.userService.delete(conditions);
  }
}
