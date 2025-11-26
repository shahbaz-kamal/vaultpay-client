export interface ISendOtp {
  email: string;
}
export interface IVerifyOtp {
  email: string;
  otp: string;
}
export interface IForgetPassword {
  email: string;
}
export interface IResetPassword {
  id: string;
  newPassword: string;
  token:string
}
export interface ISetPassword {
  password: string;

}
export interface IChangePassword {
  oldPassword: string;
  newPassword: string;

}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}
