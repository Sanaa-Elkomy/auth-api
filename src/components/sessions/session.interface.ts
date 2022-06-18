export interface SessionPayload {
  userId: string;
  userName: string;
  email: string;
  roles: string[];
  revoked?: boolean;
  blocked?: boolean;
}
