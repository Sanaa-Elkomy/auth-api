import Ajv from 'ajv';
import { RolesList } from '../../common/constant';
import { AjvOptions, regex } from '../../common/validator';

const ajv = new Ajv(AjvOptions);
const UserSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    username: { type: 'string', pattern: regex.name },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', pattern: regex.password },
    roles: {
      type: 'array',
      items: {
        type: 'string',
        enum: RolesList,
      },
    },
  },
  required: ['username', 'email', 'password', 'roles'],
};
export const validateUser = ajv.compile(UserSchema);
