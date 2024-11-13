export interface CurrentUser {
  email: string;
  token: string;
  role: number;
  expiration: Date;
}

export interface LoginUserModel {
  email: string;
  password: string;
}

export interface RegisterUserModel extends LoginUserModel {
  confirmPassword: string;
}
