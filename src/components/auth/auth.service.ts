import * as _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User } from '../users/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { JWTPayload } from '../../common/types';
import { SessionService } from '../sessions/session.service';
import { UnauthenticatedError } from '../../common/errors';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private readonly sessionService: SessionService,
  ) {}

  async comparePassword(user: User, password: string): Promise<boolean> {
    if (user) {
      const isPasswordMatching = await bcrypt.compare(password, user.password);
      if (isPasswordMatching) {
        return true;
      }
    }
    throw new UnauthenticatedError('Password do not match the saved one');
  }

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.userModel
      .findOne({ email: loginDto.email })
      .select('+password');

    await this.comparePassword(user, loginDto.password);

    if (user && user.blocked) {
      throw new UnauthenticatedError('User account is blocked');
    }

    let session = await this.sessionService.findOne({
      userId: user._id,
      revoked: false,
    });

    if (session == null) {
      session = await this.sessionService.create({
        userId: user._id,
        email: user.email,
        userName: user.username,
        roles: user.roles,
      });
    }

    const payload: JWTPayload = {
      userId: session._id,
      sessionId: session._id,
      email: session.email,
      username: session.username,
      roles: session.roles,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: _.omit(user.toJSON(), ['password']),
    };
  }
}
