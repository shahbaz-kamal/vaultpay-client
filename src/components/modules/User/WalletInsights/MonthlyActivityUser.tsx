import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { IMonthlyActivity } from "@/types";
import { useNavigate } from "react-router";
import { MonthlyTransactionAmount } from "../../MonthlyTransactionAmount";
import { MonthlyTransactionComparisonLineChart } from "../../MonthlyTransactionComparisonLineChart";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import LoadingPage from "@/components/layouts/LoadingPage";
import { Role } from "@/types/user.type";

interface IProps {
  requiredData: IMonthlyActivity;
}

export default function MonthlyActivityUser({ requiredData }: IProps) {
  const { data: userData } = useGetMeQuery(undefined);
  const navigate = useNavigate();
  if (!userData) return <LoadingPage></LoadingPage>;
  if (!requiredData) {
    return (
      <Card className="w-full border-dashed">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <svg
              className="h-6 w-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Calendar icon for monthly activity */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <CardTitle className="mt-4">No Monthly Activity</CardTitle>
          <CardDescription>Your monthly activity chart will appear here once you start making transactions.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">Complete a transaction this month to see your activity visualized here.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => navigate(`${userData?.data.role === Role.USER ? "/user/add-money" : "/agent/add-money"}`)}
            className=" hover:cursor-pointer"
          >
            Add Money?
          </Button>
        </CardFooter>
      </Card>
    );
  }
  console.log("From monthly activity", requiredData);
  return (
    <div className="space-y-6">
      <MonthlyTransactionAmount chartData={requiredData.monthlyTransactionAmount}></MonthlyTransactionAmount>
      <MonthlyTransactionComparisonLineChart
        chartData={requiredData.monthlyTransactionAmountByType}
      ></MonthlyTransactionComparisonLineChart>
    </div>
  );
}
