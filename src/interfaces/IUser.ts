export interface IUser {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  password: string;
  created_at: Date;
  updated_at: Date;
}
