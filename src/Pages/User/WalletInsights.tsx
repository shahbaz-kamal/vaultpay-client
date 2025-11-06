import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import CardGrid from "@/components/modules/Admin/Analytics/CardGrid";
import TransactionOverViewUser from "@/components/modules/User/WalletInsights/TransactionOverViewUser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { role } from "@/constants/role";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { TCardDisplayDataType } from "@/types";
import { Wallet, ArrowDownCircle, ArrowUpCircle, Loader, RefreshCcw, ReceiptText } from "lucide-react";

export default function WalletInsights() {
  const { data: userData, isLoading } = useGetMeQuery(undefined);

  if (isLoading) return <LoadingPage></LoadingPage>;
  console.log(userData);

  const cardObject = [
    {
      title: "Current Balance",
      icon: <Wallet className="text-blue-500 w-5 h-5" />,
      data: 12540,
      description: "Available for use",
    },
    {
      title: userData?.data?.role === role.user ? "Total Cash In From Agent" : "Total Cash In To User",
      icon: <ArrowDownCircle className="text-green-500 w-5 h-5" />,
      data: 26800,
      description: "All Time",
    },
    {
      title: "Total Cash Out",
      icon: <ArrowUpCircle className="text-red-500 w-5 h-5" />,
      data: 25000,
      description: "All Time",
    },
    {
      title: "Total Add Money",
      icon: <ArrowDownCircle className="w-5 h-5 text-green-600" />,
      data: 200,
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
        <TransactionOverViewUser></TransactionOverViewUser>
      </div>
    </div>
  );
}
