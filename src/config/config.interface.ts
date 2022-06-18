export interface IConfig {
  port: number;
  host: string;
  mongo_uri: string;
  jwt_secret: string;
  jwt_expires_in: string;
}
