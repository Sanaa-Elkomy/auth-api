import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import * as mongoose from 'mongoose';

import { Model, FilterQuery } from 'mongoose';
import { SessionPayload } from './session.interface';
import { Session } from './session.schema';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<Session>,
  ) {}

  async create(
    data: SessionPayload,
    transaction: mongoose.ClientSession | null = null,
  ): Promise<Session> {
    const accessToken = new this.sessionModel(data);
    return accessToken.save({ session: transaction });
  }

  async findOne(condition: FilterQuery<Session>): Promise<Session> {
    return this.sessionModel.findOne(condition);
  }

  async revokeUser(email: string): Promise<any> {
    return this.sessionModel.updateOne(
      { email, revoked: false },
      { $set: { revoked: true } },
    );
  }

  async deleteMany(userId: string, transaction: mongoose.ClientSession) {
    return this.sessionModel.deleteMany(
      {
        userId: new ObjectId(userId),
      },
      { session: transaction },
    );
  }
}
