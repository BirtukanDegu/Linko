export interface UserDataType {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  createdAt: string,
  username: string
}

export interface AuthDataType {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}