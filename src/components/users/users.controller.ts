import {
  BadRequestException,
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
import { CaslAbilityFactory } from '../../casl/casl-ability.factory';
import { Action } from '../../common/constant';
import { UnauthorizedError, ValidationError } from '../../common/errors';
import { ROUTES } from '../../common/routes';
import { capitalizeInitials } from '../../utils';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersDto } from './users.dto';
import { User } from './users.schema';
import { UsersService } from './users.service';
import { validateUser } from './users.validation';

@ApiTags(capitalizeInitials(ROUTES.users.name))
@Controller(ROUTES.users.route)
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @Post()
  async create(@Body() userDto: UsersDto): Promise<User> {
    const isValid = validateUser(userDto);
    if (!isValid) {
      throw new BadRequestException(validateUser.errors);
    }

    return await this.userService.create(userDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('log-out')
  async logOut(@Request() req: any): Promise<any> {
    const ability = this.caslAbilityFactory.createForUser(req.user);
    if (!ability.can(Action.Update, User)) {
      throw new UnauthorizedError();
    }

    return await this.userService.logOut(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(@Request() req, @Param('id') userId: string): Promise<User> {
    const ability = this.caslAbilityFactory.createForUser(req.user);
    if (!ability.can(Action.Read, User)) {
      throw new UnauthorizedError();
    }

    const conditions: FilterQuery<User> = { _id: userId };
    return await this.userService.findOne(conditions);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Request() req, @Param('id') userId: string): Promise<any> {
    const ability = this.caslAbilityFactory.createForUser(req.user);
    if (!ability.can(Action.Delete, User)) {
      throw new UnauthorizedError();
    }

    return await this.userService.delete(userId);
  }
}
