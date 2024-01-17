export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  codeReferral: string;
}
