
import { Wallet, PiggyBank, Coins, HandCoins } from "lucide-react";
import CardGrid from "./CardGrid";

import { TCardDisplayDataType, type DashboardCard } from "@/types";
import type { ISystemBalanceAndRevenue } from "@/types/stats.type";

interface ISystemBalanceAndRevenueProps {
  requiredData:ISystemBalanceAndRevenue
}


export default function SystemBalanceAndRevenue({requiredData}:ISystemBalanceAndRevenueProps) {
  

  const cardObject: DashboardCard[] = [
    {
      title: "Total system balance",
      icon: <Wallet className="w-5 h-5" style={{ color: "var(--chart-1)" }} />,
      data: requiredData.systemBalance,
      description: "Total funds currently held in the system wallet",
    },
    {
      title: "Average user wallet balance",
      icon: <PiggyBank className="w-5 h-5" style={{ color: "var(--chart-2)" }} />,
      data: requiredData.averageUserWalletBalance,
      description: "Average wallet balance across all registered users and Agents",
    },
    {
      title: "Total system revenue",
      icon: <Coins className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.totalSystemRevenue,
      description: "Total revenue generated from all platform transactions",
    },
    {
      title: "Agent commission payouts",
      icon: <HandCoins className="w-5 h-5" style={{ color: "var(--chart-4)" }} />,
      data: requiredData.agentComimissionPayout,
      description: "Total commissions distributed to agents so far",
    },
  ];
  return (
    <div className="space-y-6">
      <CardGrid cardObject={cardObject} cardDisplayDataType={TCardDisplayDataType.moneyCount} ></CardGrid>
    </div>
  );
}
