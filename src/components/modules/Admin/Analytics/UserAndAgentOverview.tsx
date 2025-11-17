import { TCardDisplayDataType, type IUserAndAgentOverview } from "@/types";
import CardGrid from "./CardGrid";
import { PieChartActive } from "./PieChartActive";
import { UserCheck, UserPlus, Users } from "lucide-react";
import { Role } from "@/types/user.type";

interface UserAndAgentOverviewProps {
  requiredData: IUserAndAgentOverview;
}

export default function UserAndAgentOverview({ requiredData }: UserAndAgentOverviewProps) {
 
  const cardObject = [
    {
      title: "Total Users",
      icon: <Users className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.totalUsers,
      description: "All Time Users",
    },
    {
      title: "Total Agents",
      icon: <UserCheck className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.totalAgents,
      description: "All Time Agents",
    },
    {
      title: "New Users ",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.newUsersInLastSevenDays,
      description: "Last seven days",
    },
    {
      title: "New Users",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.newUsersInLastThirtyDays,
      description: "Last thirty days",
    },
    {
      title: "New Users",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.newUsersInLastSixtyDays,
      description: "Last Sixty days",
    },
    {
      title: "New Agents ",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.newAgentsInLastSevenDays,
      description: "Last seven days",
    },
    {
      title: "New Agents",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.newAgentsInLastThirtyDays,
      description: "Last thirty days",
    },
    {
      title: "New Agents",
      icon: <UserPlus className="w-5 h-5" style={{ color: "var(--chart-3)" }} />,
      data: requiredData.newAgentsInLastSixtyDays,
      description: "Last Sixty days",
    },
  ];

  const pieChartDataForUsers = {
    active: requiredData.totalActiveUsers,
    inactive: requiredData.totalInactiveUsers,
  };
  const pieChartDataForAgents = {
    active: requiredData.totalActiveAgents,
    inactive: requiredData.totalInactiveAgents,
  };

  return (
    <div className="space-y-6">
      <CardGrid cardObject={cardObject} cardDisplayDataType={TCardDisplayDataType.peopleCount}></CardGrid>
      <div className=" grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Wallet Balance */}

        <PieChartActive chartData={pieChartDataForUsers} role={Role.USER}></PieChartActive>
        <PieChartActive chartData={pieChartDataForAgents} role={Role.AGENT}></PieChartActive>
      </div>
    </div>
  );
}
