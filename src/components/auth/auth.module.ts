import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../../components/auth/auth.controller';
import { AuthService } from '../../components/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { config } from '../../config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/users.schema';
import { JwtStrategy } from './jwt-auth.strategy';
import { SessionModule } from '../sessions/session.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: config.jwt_secret,
    }),
    SessionModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthModule],
})
export class AuthModule {}
