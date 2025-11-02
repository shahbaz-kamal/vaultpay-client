
export type {ISendOtp,ILogin,IRegister} from './auth.type';

export interface INavigationLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}