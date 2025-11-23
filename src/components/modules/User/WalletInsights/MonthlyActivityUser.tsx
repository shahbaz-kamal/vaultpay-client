import type { IMonthlyActivity } from "@/types";
import { MonthlyTransactionAmount } from "../../MonthlyTransactionAmount";
import { MonthlyTransactionComparisonLineChart } from "../../MonthlyTransactionComparisonLineChart";

interface IProps {
  requiredData: IMonthlyActivity;
}

export default function MonthlyActivityUser({ requiredData }: IProps) {
  console.log("From monthly activity", requiredData);
  return (
    <div className="space-y-6">
      <MonthlyTransactionAmount chartData={requiredData.monthlyTransactionAmount}></MonthlyTransactionAmount>
      <MonthlyTransactionComparisonLineChart chartData={requiredData.monthlyTransactionAmountByType}></MonthlyTransactionComparisonLineChart>
    </div>
  );
}
