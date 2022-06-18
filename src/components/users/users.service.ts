import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Model, FilterQuery } from 'mongoose';
import { UsersDto } from './users.dto';
import { User } from './users.schema';
import { SessionService } from '../sessions/session.service';
import { ValidationError, NotFoundError } from 'src/common/errors';
import { JWTPayload } from 'src/common/types';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectConnection() private readonly connection: mongoose.Connection,
    private readonly sessionService: SessionService,
  ) {}

  async create(userDto: UsersDto): Promise<any> {
    let user = await this.userModel.findOne({ email: userDto.email });

    if (user) {
      throw new ValidationError(
        `user with email ${userDto.email} already exists`,
      );
    }

    let session = null;
    const transaction = await this.connection.startSession();
    await transaction.withTransaction(async () => {
      const password = bcrypt.hashSync(userDto.password, 10);
      user = new this.userModel({ ...userDto, password });
      await user.save({ session: transaction });
      session = await this.sessionService.create(
        {
          userId: user._id,
          email: user.email,
          userName: user.username,
          roles: user.roles,
        },
        transaction,
      );
    });

    await transaction.endSession();
    return session;
  }

  async logOut(token: JWTPayload): Promise<any> {
    const updatedResult = await this.sessionService.revokeUser(token.email);
    if (updatedResult.modifiedCount) {
      return { message: 'log-out successful' };
    }
    return { message: 'log-out failed' };
  }

  async findOne(condition: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(condition);
  }

  async delete(condition: FilterQuery<User>): Promise<any> {
    const user = await this.userModel.findOne(condition);

    if (!user) {
      throw new NotFoundError(`user with id ${condition._id} is not found`);
    }
    return this.userModel.deleteOne(condition);
  }
}
