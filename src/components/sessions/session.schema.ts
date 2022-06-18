import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from '../users/users.schema';

@Schema({
  versionKey: false,
})
export class Session extends Document {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: User.name,
    required: true,
  })
  userId: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  roles: string[];

  @Prop({
    type: SchemaTypes.Boolean,
    default: false,
  })
  revoked: boolean;

  @Prop({
    type: SchemaTypes.Boolean,
    default: false,
  })
  blocked: boolean;
}

export const SessionSchema = SchemaFactory.createForClass(Session);

SessionSchema.index({ userId: 1 });
