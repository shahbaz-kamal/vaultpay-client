import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
// import { PieSectorDataItem } from "recharts/types/polar/Pie"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import { Role } from "@/types/user.type";
import LoadingPage from "@/components/layouts/LoadingPage";
import { useCountUp } from "@/hooks/useCountUp";

export const description = "An interactive pie chart";

// const desktopData = [
//   { month: "active", desktop: 186, fill: "var(--color-active)" },
//   { month: "february", desktop: 305, fill: "var(--color-february)" },
// ]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  active: {
    label: "active",
    color: "var(--chart-1)",
  },
  inactive: {
    label: "inactive",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface IProps {
  role: Role;
  chartData: {
    active: number;
    inactive: number;
  };
}

export function PieChartActive({ role, chartData }: IProps) {
  const myNumberRef = React.useRef<SVGTSpanElement | null>(null);

  // if(!chartData) return <LoadingPage></LoadingPage>
  console.log("ChartData", chartData);

  const userData = [
    { status: "active", user: chartData.active, fill: "var(--color-active)" },
    { status: "inactive", user: chartData.inactive, fill: "var(--color-inactive)" },
  ];

  const id = "pie-interactive";
  const [activeStatus, setActiveStatus] = React.useState(userData[0].status);

  const activeIndex = React.useMemo(() => userData.findIndex((item) => item.status === activeStatus), [activeStatus]);
  const statuses = React.useMemo(() => userData.map((item) => item.status), []);
  let title = "";
  if (role === Role.USER) title = "User";
  else title = "Agent";

  useCountUp(myNumberRef.current, userData[activeIndex].user ?? 0);

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Active vs Inactive {title}s</CardTitle>
          {/* <CardDescription>January - June 2024</CardDescription> */}
        </div>
        <Select value={activeStatus} onValueChange={setActiveStatus}>
          <SelectTrigger className="ml-auto h-7 w-[130px] rounded-lg pl-2.5" aria-label="Select a value">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {statuses.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem key={key} value={key} className="rounded-lg [&_span]:flex">
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-xs"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer id={id} config={chartConfig} className="mx-auto aspect-square w-full max-w-[300px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={userData}
              dataKey="user"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector {...props} outerRadius={outerRadius + 25} innerRadius={outerRadius + 12} />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan ref={myNumberRef} x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {userData[activeIndex].user.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-red-500">
                          {title}
                          {Number(userData[activeIndex].user.toLocaleString()) > 1 ? "s" : ""}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
