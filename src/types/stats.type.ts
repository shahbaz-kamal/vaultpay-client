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

export interface IAdminStats {
  userAndAgentOverview: IUserAndAgentOverview;
  systemBalanceAndRevenue: ISystemBalanceAndRevenue;
}
