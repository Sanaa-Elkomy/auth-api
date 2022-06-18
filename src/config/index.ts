import * as dotenv from 'dotenv';
dotenv.config();
import development from './config.dev';
import test from './config.test';
import staging from './config.staging';
import production from './config.prod';
import { IConfig } from './config.interface';

const currentEnv = process.env.NODE_ENV || 'development';
const envs = {
  development,
  test,
  staging,
  production,
};

export const config: IConfig = {
  ...envs[currentEnv],
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN,
};

console.log(`[Current Enviroment]: ${currentEnv}, [HOST]: ${config.host}`);
