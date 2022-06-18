import { Options } from 'ajv';
export * from './regex';

export const AjvOptions: Options = {
  allErrors: true,
  useDefaults: true,
  formats: { email: true },
};
