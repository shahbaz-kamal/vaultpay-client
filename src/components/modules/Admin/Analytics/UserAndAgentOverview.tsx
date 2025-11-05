import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, UserPlus, Users } from "lucide-react";
import { PieChartActive } from "./PieChartActive";

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
    
      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Wallet Balance */}

        {cardObject.map((singleCard) => (
          <Card className="">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="">{singleCard.title}</CardTitle>
              {singleCard.icon}
            </CardHeader>
            <CardContent>
              <p className="text-2xl">৳{singleCard.data}</p>
              <p className="">{singleCard.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className=" grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Wallet Balance */}

        <PieChartActive></PieChartActive>
        <PieChartActive></PieChartActive>
      </div>
    </div>
  );
}
