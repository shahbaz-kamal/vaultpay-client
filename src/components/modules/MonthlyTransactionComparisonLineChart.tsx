

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
 type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = "A multiple line chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 ,tablet:0},
  { month: "February", desktop: 305, mobile: 200,tablet:250 },
  { month: "March", desktop: 237, mobile: 120,tablet:100 },
  { month: "April", desktop: 73, mobile: 190 ,tablet:300},
  { month: "May", desktop: 209, mobile: 130,tablet:200 },
  { month: "June", desktop: 214, mobile: 140,tablet:200 },
  { month: "June", desktop: 214, mobile: 140 ,tablet:200},

]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  tablet: {
    label: "Tablet",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function MonthlyTransactionComparisonLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Monthly Trannsaction amount Comparison</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
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
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="tablet"
              type="monotone"
              stroke="var(--color-tablet)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
