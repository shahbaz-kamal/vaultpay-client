"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import type { IMonthlyTransactionAmount } from "@/types";
import { calculateTrendingUpPercantageFromLastMonth } from "@/utils/calculateTrendingUpPercantageFromLastMonth";

export const description = "A line chart with dots";

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
//   { month: "July", desktop: 214, mobile: 140 },
//   { month: "August", desktop: 214, mobile: 140 },
//   { month: "September", desktop: 214, mobile: 140 },
//   { month: "October", desktop: 214, mobile: 140 },
//   { month: "November", desktop: 214, mobile: 140 },
//   { month: "December", desktop: 214, mobile: 140 },
// ];

const chartConfig = {
  amount: {
    label: "Amount",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface IProps {
  chartData: IMonthlyTransactionAmount[];
}

export function MonthlyTransactionAmount({ chartData }: IProps) {
  // console.log("From Monthly Transaction Amount", chartData);
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

  const trendingUpPercantage = calculateTrendingUpPercantageFromLastMonth(chartData, lengthOfChartData);
  console.log(trendingUpPercantage);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Transaction Amount (Upto Last one year) </CardTitle>
        <CardDescription>
          {fromDate.month} {fromDate.year} - {toDate.month} {toDate.year}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="md:h-[35vh] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top:12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="amount"
              type="natural"
              stroke="var(--color-amount)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-amount)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {trendingUpPercantage && (
          <div className="flex gap-2 leading-none font-medium">
            Trending up by {trendingUpPercantage}% this month <TrendingUp className="h-4 w-4" />
          </div>
        )}

        <div className="text-muted-foreground leading-none">Showing total transaction amount for the last {lengthOfChartData} months</div>
      </CardFooter>
    </Card>
  );
}
