export interface JWTPayload {
  userId: string;
  sessionId: string;
  email: string;
  username: string;
  roles: string[];
}
