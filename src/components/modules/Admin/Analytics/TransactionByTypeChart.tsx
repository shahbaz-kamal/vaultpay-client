import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CustomTooltip } from "@/hooks/CustomTooltip";

export const description = "A bar chart";

// const chartData = [
//   { type: "Cash In", transactionData: 186 },
//   { type: "Cash Out", transactionData: 305 },
//   { type: "Add Money", transactionData: 237 },
//   { type: "Send Money", transactionData: 73 },
// ];

// const chartConfig = {
//   cash_in: {
//     label: "cash_in",
//     color: "var(--chart-1)",
//   },
//   cash_out: {
//     label: "cash_out",
//     color: "var(--chart-2)",
//   },
//   add_money: {
//     label: "cash_out",
//     color: "var(--chart-2)",
//   },
//   send_money: {
//     label: "cash_out",
//     color: "var(--chart-2)",
//   },
// } satisfies ChartConfig
const chartConfig = {
  cash_in: {
    label: "Cash In",
    color: "var(--chart-1)",
  },
  cash_out: {
    label: "Cash Out",
    color: "var(--chart-2)",
  },
  add_money: {
    label: "Add Money",
    color: "var(--chart-3)",
  },
  send_money: {
    label: "Send Money",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

interface IProps {
  chartTitle: string;
  isShowNumber: boolean;
  footerData:string
  chartData: {
    type: string;
    transactionData: number;
  }[];
}

export function TransactionByTypeChart({ chartTitle, isShowNumber, chartData,footerData }: IProps) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-center md:text-lg">
        <CardTitle>{chartTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="type" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value} />
            {/* <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} /> */}
            <ChartTooltip cursor={false} content={<CustomTooltip isShowNumber={isShowNumber} />} />
            {/* <Bar
              dataKey="transactionData"
              fill={(data) => {
                switch (data.type) {
                  case "Cash In":
                    return chartConfig.cash_in.color;
                  case "Cash Out":
                    return chartConfig.cash_out.color;
                  case "Add Money":
                    return chartConfig.add_money.color;
                  case "Send Money":
                    return chartConfig.send_money.color;
                  default:
                    return "#6b7280"; // default gray
                }
              }}
              radius={8}
            /> */}
            <Bar dataKey="transactionData" radius={8}>
              {chartData.map((entry, index) => {
                let color = "#6b7280";

                switch (entry.type) {
                  case "Cash In":
                    color = chartConfig.cash_in.color;
                    break;
                  case "Cash Out":
                    color = chartConfig.cash_out.color;
                    break;
                  case "Add Money":
                    color = chartConfig.add_money.color;
                    break;
                  case "Send Money":
                    color = chartConfig.send_money.color;
                    break;
                }

                return <Cell key={`cell-${index}`} fill={color} />;
              })}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm font-bold">
        {/* <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="text-muted-foreground leading-none">{footerData}</div>
      </CardFooter>
    </Card>
  );
}
