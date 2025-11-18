import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CustomTooltip } from "@/hooks/CustomTooltip";

export const description = "A bar chart with a custom label";

const chartData = [
  { source: "SSLCOMMERZE", transactionData: 186 },
  { source: "AGENT", transactionData: 305 },
  { source: "USER", transactionData: 237 },
];

const chartConfig = {
  transactionData: {
    label: "transactionData",
    color: "var(--chart-2)",
  },

  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

interface IPropsSource {
  chartTitle: string;
  isShowNumber: boolean;

  footerData: string;
  chartData: {
    source: string;
    transactionData: number;
  }[];
}

export function TransactionBySourceChart({ chartTitle, footerData, isShowNumber, chartData }: IPropsSource) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="source"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey="transactionData" type="number" hide />
            {/* <ChartTooltip cursor={false} content={<ChartTooltipContent />} /> */}
            <ChartTooltip cursor={false} content={<CustomTooltip isShowNumber={isShowNumber} />} />
            <Bar dataKey="transactionData" layout="vertical" fill="var(--color-transactionData)" radius={4}>
              <LabelList dataKey="source" position="insideLeft" offset={8} className="fill-(--color-label)" fontSize={12} />
              <LabelList dataKey="transactionData" position="right" offset={8} className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm font-bold ">
        <div className="text-muted-foreground leading-none">{footerData}</div>
      </CardFooter>
    </Card>
  );
}
