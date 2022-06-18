import Ajv from 'ajv';
import { AjvOptions, regex } from '../../common/validator';

const ajv = new Ajv(AjvOptions);

const LoginSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', pattern: regex.password },
  },
  required: ['email', 'password'],
};
export const validateLogin = ajv.compile(LoginSchema);
