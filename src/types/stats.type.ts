export interface IUserAndAgentOverview {
  totalUsers: number;
  totalAgents: number;
  newUsersInLastSevenDays: number;
  newUsersInLastThirtyDays: number;
  newUsersInLastSixtyDays: number;
  newAgentsInLastSevenDays: number;
  newAgentsInLastThirtyDays: number;
  newAgentsInLastSixtyDays: number;
  totalActiveUsers: number;
  totalInactiveUsers: number;
  totalActiveAgents: number;
  totalInactiveAgents: number;
}

export interface ISystemBalanceAndRevenue {
  systemBalance: number;
  averageUserWalletBalance: number;
  totalSystemRevenue: number;
  agentComimissionPayout: number;
}

export interface ITransactionByType {
  type: string;
  count: number;
  amount: number;
}
export interface ITransactionBySource {
  source: string;
  count: number;
  amount: number;
}

export interface ITransactionOverview {
  totalTransaction:number
  totalTransactionAmount:number
  transactionByType:ITransactionByType[]
  transactionBySource:ITransactionBySource[]
}

export interface ITopUsersAndAgents {
  _id: string
  transactionAmount: number
  name: string
  profilePicture: string | null
}

export interface ITopPerformer {
  topUsers:ITopUsersAndAgents[]
  topAgents:ITopUsersAndAgents[]
}
export interface IAdminStats {
  userAndAgentOverview: IUserAndAgentOverview;
  systemBalanceAndRevenue: ISystemBalanceAndRevenue;
  transactionOverview: ITransactionOverview;
  topPerformer:ITopPerformer

}


// 
export interface IWalletOverview {
  currentBalance: number
  totalCashInFromAgent: number
  totalCashOut: number
  totalAddMOney: number
}
export interface ITransactionOverviewUser {
  totalTransaction: number
  transactionsAmount: number
  transactionByType: ITransactionByType[]
}

export interface IMonthlyTransactionAmount {
  amount: number
  month: string
  year: number
}

export interface IMonthlyTransactionAmountByType {
  month: string
  ADD_MONEY: number
  CASH_OUT: number
  CASH_IN: number
  SEND_MONEY?: number
  year:number
}
export interface IMonthlyActivity {
  monthlyTransactionAmount:IMonthlyTransactionAmount[]
  monthlyTransactionAmountByType:IMonthlyTransactionAmountByType[]
}
export interface IUserStats {
  walletOverview: IWalletOverview
  transactionOverview:ITransactionOverviewUser
  monthlyActivity:IMonthlyActivity
}


