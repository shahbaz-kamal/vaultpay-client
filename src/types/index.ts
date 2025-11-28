import type { ComponentType, JSX } from "react";

export type { ISendOtp, ILogin, IRegister, IVerifyOtp,IForgetPassword,IResetPassword,ISetPassword,IChangePassword } from "./auth.type";
export type { IAddMoney, ITransaction, ICashOut } from "./transaction.type";
export type { IUser, IUpdateUser } from "./user.type";
export type { ITestimonial} from './testimonial.type.ts'

export type {
  IAdminStats,
  IUserAndAgentOverview,
  ITransactionOverview,
  ISystemBalanceAndRevenue,
  ITransactionBySource,
  ITransactionByType,
  IWalletOverview,
  IUserStats,
  ITransactionOverviewUser,
  IMonthlyTransactionAmount,
  IMonthlyActivity,
  IMonthlyTransactionAmountByType,
  IWalletOverviewAgent,
  IAgentStats
} from "./stats.type.ts";

export interface INavigationLink {
  href: string;
  label: string;
  active?: boolean;
}
export interface TMeta {
  totalDocuments?: number;
  noOfMatchedDocuments?: number;
  pageNumber?: number;
  totalPage?: number;
  limit?: number;
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: TMeta;
}

export interface ISidebarItems {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type Trole = "SUPER-ADMIN" | "ADMIN" | "USER" | "AGENT";

export interface DashboardCard {
  title: string;
  icon: JSX.Element;
  data: number;
  description: string;
}

export enum TCardDisplayDataType {
  peopleCount = "peopleCount",
  moneyCount = "moneyCount",
}

export interface ITransactionHistoryTableData {
  id: string | number;
  senderEmail: string | null;
  receiverEmail: string | null;
  amount: number;
  status: string;
  type: string;
  transactionDate: string;
}
