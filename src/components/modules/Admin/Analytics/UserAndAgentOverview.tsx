import { TCardDisplayDataType } from "@/types";
import CardGrid from "./CardGrid";
import { PieChartActive } from "./PieChartActive";
import { UserCheck, UserPlus, Users } from "lucide-react";

export default function UserAndAgentOverview() {
  const cardObject = [
    {
      title: "Total Users",
      icon: <Users className="w-5 h-5" style={{ color: "var(--chart-1)" }} />,
      data: 12540,
      description: "All Time Users",
    },
    {
      title: "Total Agents",
      icon: <UserCheck className="w-5 h-5" style={{ color: "var(--chart-2)" }} />,
      data: 245,
      description: "All Time Agents",
    },
    {
      title: "New Users ",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: 120,
      description: "Last seven days",
    },
    {
      title: "New Users",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-4)" }} />,
      data: 3500,
      description: "Last thirty days",
    },
  ];
  return (
    <div className="space-y-6">
      <CardGrid cardObject={cardObject} cardDisplayDataType={TCardDisplayDataType.peopleCount}></CardGrid>
      <div className=" grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Wallet Balance */}

        <PieChartActive></PieChartActive>
        <PieChartActive></PieChartActive>
      </div>
    </div>
  );
}
