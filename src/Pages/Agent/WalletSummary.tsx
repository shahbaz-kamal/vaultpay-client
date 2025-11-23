import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import CardGrid from "@/components/modules/Admin/Analytics/CardGrid";
import { TransactionHistory } from "@/components/modules/TransactionHistory";
import MonthlyActivityUser from "@/components/modules/User/WalletInsights/MonthlyActivityUser";

import TransactionOverViewUser from "@/components/modules/User/WalletInsights/TransactionOverViewUser";
import { role } from "@/constants/role";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { useGetStatsForAgentQuery, useGetStatsForUserQuery } from "@/redux/features/stats/stats.api";
import { TCardDisplayDataType, type IMonthlyActivity, type IMonthlyTransactionAmount, type ITransaction, type ITransactionOverviewUser } from "@/types";
import { ArrowDownCircle, ArrowUpCircle, CalendarDays, RefreshCcw, Wallet } from "lucide-react";



export default function WalletSummary() {
  const { data: userData, isLoading: userLoading } = useGetMeQuery(undefined);
  const { data: statsData, isLoading: statsLoading } = useGetStatsForAgentQuery(undefined);

  if (userLoading || statsLoading) return <LoadingPage></LoadingPage>;
  console.log(statsData);

  const cardObject = [
    {
      title: "Current Balance",
      icon: <Wallet className="text-blue-500 w-5 h-5" />,
      data: statsData?.data.walletOverview.currentBalance as number,
      description: "Available for use",
    },
    {
      title: userData?.data?.role === role.user ? "Total Cash In From Agent" : "Total Cash In To User",
      icon: <ArrowDownCircle className="text-green-500 w-5 h-5" />,
      data: statsData?.data.walletOverview.totalCashInFromAgent as number,
      description: "All Time",
    },
    {
      title: "Total Cash Out",
      icon: <ArrowUpCircle className="text-red-500 w-5 h-5" />,
      data: statsData?.data.walletOverview.totalCashOut as number,
      description: "All Time",
    },
    {
      title: "Total Add Money",
      icon: <ArrowDownCircle className="w-5 h-5 text-green-600" />,
      data: statsData?.data.walletOverview.totalAddMOney as number,
      description: "All TIme",
    },
  ];

  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="Overview" subSubHeading="Wallet Insights" />
      <div className="container mx-auto px-5 py-6">
        {/* 💰 Wallet Overview */}
        <DashboardTitle title="Wallet Overview" icon={<Wallet size={20} />}></DashboardTitle>
        <CardGrid cardObject={cardObject} cardDisplayDataType={TCardDisplayDataType.moneyCount}></CardGrid>

        {/* 🔄 Transaction Overview*/}
        <div className="mt-6"></div>
        <DashboardTitle title="Transaction Overview" icon={<RefreshCcw size={20} />}></DashboardTitle>
        <TransactionOverViewUser requiredData={statsData?.data.transactionOverview as ITransactionOverviewUser}></TransactionOverViewUser>
        {/* 📅 Monthly Activity*/}
        <div className="mt-6"></div>
        <DashboardTitle title="Monthly Activity" icon={<CalendarDays size={20} />}></DashboardTitle>
        <MonthlyActivityUser
          requiredData={statsData?.data.monthlyActivity as IMonthlyActivity}
        ></MonthlyActivityUser>
        {/* Recent Transactions*/}
        <div className="mt-6"></div>
        <DashboardTitle title="Recent 5 Transactions" icon={<CalendarDays size={20} />}></DashboardTitle>
        <TransactionHistory requiredData={statsData?.data.recentFiveTRansactions as Partial<ITransaction>[]}></TransactionHistory>
      </div>
    </div>
  );
}
