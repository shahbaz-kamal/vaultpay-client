import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import SystemBalanceAndRevenue from "@/components/modules/Admin/Analytics/SystemBalanceAndRevenue";
import TopPerformer from "@/components/modules/Admin/Analytics/TopPerformer";
import TransactionOverview from "@/components/modules/Admin/Analytics/TransactionOverview";
import UserAndAgentOverview from "@/components/modules/Admin/Analytics/UserAndAgentOverview";

import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { useGetStatsForAdminQuery } from "@/redux/features/stats/stats.api";
import type { ISystemBalanceAndRevenue, ITransactionOverview, IUserAndAgentOverview } from "@/types";

import { BadgeDollarSign, Medal, RefreshCcw, Users } from "lucide-react";

export default function Analytics() {
  const { data: userData, isLoading } = useGetMeQuery(undefined);
  const { data: analyticsData, isLoading: analyticsLoading } = useGetStatsForAdminQuery(undefined);
  if (isLoading || analyticsLoading) return <LoadingPage></LoadingPage>;
  console.log(userData);
  console.log(analyticsData)

  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="Analytics" subSubHeading="" />

      <div className=" mx-auto px-8 py-6">
        {/* User & Agent Overview */}
        <DashboardTitle title="User & Agent Overview" icon={<Users size={20} />}></DashboardTitle>
        <UserAndAgentOverview requiredData={analyticsData?.data.userAndAgentOverview as IUserAndAgentOverview}></UserAndAgentOverview>

        {/* 💰 System Balance & Revenue */}
        <div className="mt-6"></div>
        <DashboardTitle title="System Balance & Revenue" icon={<BadgeDollarSign size={20} />}></DashboardTitle>
        <SystemBalanceAndRevenue requiredData={analyticsData?.data.systemBalanceAndRevenue as ISystemBalanceAndRevenue}></SystemBalanceAndRevenue>

        {/* 🔄 Transaction Overview*/}
        <div className="mt-6"></div>
        <DashboardTitle title="Transaction Overview" icon={<RefreshCcw size={20} />}></DashboardTitle>
        <TransactionOverview requiredData={analyticsData?.data.transactionOverview as ITransactionOverview}></TransactionOverview>

        {/* 🧮 Top Performers*/}
        <div className="mt-6"></div>
        <DashboardTitle title="Top Performer" icon={<Medal size={20} />}></DashboardTitle>
        <TopPerformer></TopPerformer>
      </div>
    </div>
  );
}
