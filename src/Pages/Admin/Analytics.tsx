import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import SystemBalanceAndRevenue from "@/components/modules/Admin/Analytics/SystemBalanceAndRevenue";
import TopPerformer from "@/components/modules/Admin/Analytics/TopPerformer";
import TransactionOverview from "@/components/modules/Admin/Analytics/TransactionOverview";
import UserAndAgentOverview from "@/components/modules/Admin/Analytics/UserAndAgentOverview";

import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { BadgeDollarSign, Medal, RefreshCcw, Users } from "lucide-react";

export default function Analytics() {
  const { data: userData, isLoading } = useGetMeQuery(undefined);

  if (isLoading) return <LoadingPage></LoadingPage>;
  console.log(userData);

  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="Analytics" subSubHeading="" />

      <div className="container mx-auto px-5 py-6">
        {/* User & Agent Overview */}
        <DashboardTitle title="User & Agent Overview" icon={<Users size={20} />}></DashboardTitle>
        <UserAndAgentOverview></UserAndAgentOverview>

        {/* 💰 System Balance & Revenue */}
        <div className="mt-6"></div>
        <DashboardTitle title="System Balance & Revenue" icon={<BadgeDollarSign size={20} />}></DashboardTitle>
        <SystemBalanceAndRevenue></SystemBalanceAndRevenue>

        {/* 🔄 Transaction Overview*/}
        <div className="mt-6"></div>
        <DashboardTitle title="Transaction Overview" icon={<RefreshCcw size={20} />}></DashboardTitle>
        <TransactionOverview></TransactionOverview>

        {/* 🧮 Top Performers*/}
        <div className="mt-6"></div>
        <DashboardTitle title="Top Performer" icon={<Medal size={20} />}></DashboardTitle>
        <TopPerformer></TopPerformer>
      </div>
    </div>
  );
}
