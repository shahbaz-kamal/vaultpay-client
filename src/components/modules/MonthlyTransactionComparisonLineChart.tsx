import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import type { IMonthlyTransactionAmountByType } from "@/types";

export const description = "A multiple line chart";

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 ,tablet:0},
//   { month: "February", desktop: 305, mobile: 200,tablet:250 },
//   { month: "March", desktop: 237, mobile: 120,tablet:100 },
//   { month: "April", desktop: 73, mobile: 190 ,tablet:300},
//   { month: "May", desktop: 209, mobile: 130,tablet:200 },
//   { month: "June", desktop: 214, mobile: 140,tablet:200 },
//   { month: "June", desktop: 214, mobile: 140 ,tablet:200},

// ]

const chartConfig = {
  ADD_MONEY: {
    label: "Add Money",
    color: "var(--chart-1)",
  },
  CASH_OUT: {
    label: "Cash Out",
    color: "var(--chart-2)",
  },
  CASH_IN: {
    label: "Cash In",
    color: "var(--chart-3)",
  },
  SEND_MONEY: {
    label: "Send Money",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

interface IProps {
  chartData: IMonthlyTransactionAmountByType[];
}
export function MonthlyTransactionComparisonLineChart({ chartData }: IProps) {
  console.log("From line chart", chartData);

  const lengthOfChartData = chartData.length;
  console.log(lengthOfChartData);
  const fromDate = {
    month: chartData[0].month,
    year: chartData[0].year,
  };
  const toDate = {
    month: chartData[lengthOfChartData - 1].month,
    year: chartData[lengthOfChartData - 1].year,
  };
  const isSendMoneyExist: boolean = chartData.some((item) => item.SEND_MONEY !== undefined);
  console.log(isSendMoneyExist);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Trannsaction amount Comparison By Type (Upto last one year)</CardTitle>
        <CardDescription>
          {fromDate.month} {fromDate.year} - {toDate.month} {toDate.year}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="md:h-[35vh] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            height={100}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="ADD_MONEY" type="monotone" stroke="var(--color-ADD_MONEY)" strokeWidth={2} dot={false} />
            <Line dataKey="CASH_IN" type="monotone" stroke="var(--color-CASH_IN)" strokeWidth={2} dot={false} />
            <Line dataKey="CASH_OUT" type="monotone" stroke="var(--color-CASH_OUT)" strokeWidth={2} dot={false} />
            {isSendMoneyExist && <Line dataKey="SEND_MONEY" type="monotone" stroke="var(--color-SEND_MONEY)" strokeWidth={2} dot={false} />}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing total visitors for the last {lengthOfChartData} months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
