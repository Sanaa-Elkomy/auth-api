import * as _ from 'lodash';
import { UnauthorizedError } from './errors';
import { JWTPayload } from './types';

export class Authorization {
  static authorize(token: JWTPayload, allowedRoles: string[]) {
    const roles = _.get(token, 'roles', []);
    const intersectedRoles = _.intersection(roles, allowedRoles);
    const hasAccess = intersectedRoles.length ? true : false;
    if (hasAccess === false) {
      throw new UnauthorizedError();
    }
  }
}
