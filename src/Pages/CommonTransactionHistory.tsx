import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import { CommonTransactionHistoryTable } from "@/components/modules/CommonTransactionHistoryTable";
import { CommonTransactionHistoryTable1 } from "@/components/modules/CommonTransactionHistoryTable1";

import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { Role } from "@/types/user.type";
import { Wallet } from "lucide-react";

export default function CommonTransactionHistory() {

// handling loading page 
const {data:userData}=useGetMeQuery(undefined)
if(!userData) return <LoadingPage></LoadingPage>

let dashboardTitle=""
if(userData?.data?.role===Role.ADMIN) dashboardTitle="Transaction made by all users (Users & Agents)"
if(userData?.data?.role===(Role.USER || Role.AGENT)) dashboardTitle="All Transactions of me "


  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="Overview" subSubHeading="Transaction History" />
      <div className="container mx-auto px-5 py-6">
        <DashboardTitle title={dashboardTitle} icon={<Wallet size={20} />}></DashboardTitle>
        <CommonTransactionHistoryTable1></CommonTransactionHistoryTable1>
      </div>
    </div>
  );
}
