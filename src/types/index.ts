import type { ComponentType } from "react";

export type { ISendOtp, ILogin, IRegister, IVerifyOtp } from "./auth.type";

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

export interface ISidebarItems {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}
