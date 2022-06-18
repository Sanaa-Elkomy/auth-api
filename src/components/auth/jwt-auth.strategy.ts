import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from 'src/config';
import { SessionService } from '../sessions/session.service';
import { UnauthenticatedError } from 'src/common/errors';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private sessionService: SessionService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.jwt_secret,
    });
  }

  async validate(payload: Record<string, any>): Promise<any> {
    const session = await this.sessionService.findOne({
      _id: payload.sessionId,
    });

    if (session == null) {
      throw new UnauthenticatedError('User session is not found');
    }

    if (session.revoked === true) {
      throw new UnauthenticatedError('User session is revoked');
    }

    if (session.blocked === true) {
      throw new UnauthenticatedError('User account is blocked');
    }

    return payload;
  }
}
